import { Logger } from 'winston';
import { IDataPort } from '../types';
import { DataPortError, DataPortErrorCode, DataPortErrorMessage } from './data.port.error';

export class BaseDataPort implements IDataPort<any> {
  private adapter: any;
  private logger: Logger;

  constructor(baseAdapter: any, logger: Logger) {
    this.adapter = baseAdapter;
    this.logger = logger;
  }

  async create(data: any) {
    try {
      return await this.adapter.create(data);
    } catch (error: any) {
      this.logger.error(error);
      throw new DataPortError(DataPortErrorMessage.CreateError, DataPortErrorCode.DP002);
    }
  }

  async read(attributes: any) {
    try {
      return await this.adapter.read(attributes);
    } catch (error: any) {
      this.logger.error(error);
      throw new DataPortError(DataPortErrorMessage.ReadError, DataPortErrorCode.DP005);
    }
  }

  async update(attributes: any, data: any) {
    try {
      return await this.adapter.update(attributes, data);
    } catch (error: any) {
      this.logger.error(error);
      throw new DataPortError(DataPortErrorMessage.UpdateError, DataPortErrorCode.DP006);
    }
  }

  async delete(attributes: any) {
    try {
      await this.adapter.delete(attributes);
    } catch (error: any) {
      this.logger.error(error);
      throw new DataPortError(DataPortErrorMessage.DeleteError, DataPortErrorCode.DP003);
    }
  }

  async close() {
    try {
      await this.adapter.closeDriver();
    } catch (error: any) {
      this.logger.error(error);
      throw new DataPortError(DataPortErrorMessage.ConnectionError, DataPortErrorCode.DP001);
    }
  }
}