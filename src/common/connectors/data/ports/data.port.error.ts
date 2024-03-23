export enum DataPortErrorMessage {
  ConnectionError = 'An exception occurred while connecting to the database',
  CreateError = 'An exception occurred while attempting to create a record',
  DeleteError = 'An exception occurred while attempting to delete a record',
  GenericPortError = 'An unknown exception occurred in the data port',
  ReadError = 'An exception occurred while attempting to read a record',
  UpdateError = 'An exception occurred while attempting to update a record',
}

export enum DataPortErrorCode {
  DP001 = 'DP001',
  DP002 = 'DP002',
  DP003 = 'DP003',
  DP004 = 'DP004',
  DP005 = 'DP005',
  DP006 = 'DP006',
}

export class DataPortError extends Error {
  public code: string;

  constructor(message: string, code: string) {
    super(message);
    this.code = code;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DataPortError);
    }
  }
}