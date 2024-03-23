import{ Logger } from 'winston';
import { logger as coreLogger } from '../../../logger/logger';
import neo4j, { Driver } from 'neo4j-driver';

enum AdapterConfig {
  uri = 'neo4j://localhost:7687',
  username = 'neo4j',
  password = 'neo4jdev',
}

export class Neo4JAdapter {
  private static instance: Neo4JAdapter;
  private static driver: Driver;
  private static logger: Logger;

  private constructor(lib = neo4j, config = AdapterConfig, logger = coreLogger) {
    Neo4JAdapter.logger = logger;
    if (!Neo4JAdapter.driver) {
      Neo4JAdapter.driver = lib.driver(config.uri, lib.auth.basic(config.username, config.password));
    }
    Neo4JAdapter.driver.getServerInfo()
      .then((serverInfo) => logger.info(serverInfo))
      .catch((error) => logger.error(error));
  }

  public static async create(data: any): Promise<any> {

  }

  public static async read(attributes: any): Promise<any> {

  }

  public static async update(attributes: any, data: any): Promise<any> {

  }

  public static async delete(attributes: any): Promise<any> {

  }

  public static getInstance(): Neo4JAdapter {
    if (!Neo4JAdapter.instance) {
      Neo4JAdapter.instance = new Neo4JAdapter();
    }

    return Neo4JAdapter.instance;
  }

  public static getDriver(): Driver {
    return Neo4JAdapter.driver;
  }

  public static async closeDriver(): Promise<void> {
    Neo4JAdapter.driver.close()
      .then(() => Neo4JAdapter.logger.info('Neo4J driver closed'))
      .catch((error) => Neo4JAdapter.logger.error(error));
    return;
  }

}