import { singleton } from 'tsyringe';
import { DevModel } from '../model/dev.model';
import { BaseDataPort } from '../../common/connectors/data/ports/base.data.port';
import { Neo4JAdapter } from '../../common/connectors/data/adapters/neo4j.adapter';
import { logger } from '../../common/logger/logger';

@singleton()
export class DevService {
  private port: BaseDataPort;
  constructor() {
    this.port = new BaseDataPort(Neo4JAdapter.getInstance(), logger);
  }

  public async getDevInfo(): Promise<DevModel> {
    const serverInfo = await Neo4JAdapter.getServerInfo();
    return {
      data: {
        message: 'Hello, Ze!',
        serverInfo,
      },
    };
  }

  public async createRecord(data: any): Promise<void> {
    await this.port.create(data);
  }
}