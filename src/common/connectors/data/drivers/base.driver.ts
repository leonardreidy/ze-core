import { inject, injectable } from 'tsyringe';
import { Driver, ServerInfo } from 'neo4j-driver';
import { Neo4JDriver } from '../../../../common/types';
import { AbstractDriver } from './abstract.driver';
import { DriverOptionsConfig } from './types';
import { DefaultDriverConfig } from './constants.driver';
import { Logger } from 'winston';

@injectable()
export class BaseDriver implements AbstractDriver {
  private config: DriverOptionsConfig = DefaultDriverConfig;
  private driver?: Driver;

  constructor(
    @inject('Neo4JDriver') private library: Neo4JDriver,
    @inject('CoreLogger') private logger: Logger) {}

  public async connect(): Promise<ServerInfo> {
    try {
      this.driver = this.initializeConnection();
    } catch(err: any) {
      this.logger.error('BaseDriver::connect | Failed to initialize connection', err);
      throw err;
    }
    return await this.driver.getServerInfo();
  }

  public async close(): Promise<void> {
    try {
      if (!this.driver) throw new Error('BaseDriverError: Driver undefined');
      const message = await this.driver.getServerInfo();
      this.logger.info('info', message);
      await this.driver.close();
    } catch(err: any) {
      this.logger.error('BaseDriver::close | Failed to close connection', err);
      throw err;
    }
    return;
  }

  private initializeConnection(): Driver {
    return this.library.driver(this.config.uri, this.library.auth.basic(this.config.user, this.config.pass));
  }
}
