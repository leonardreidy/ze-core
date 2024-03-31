import { ConnectionInfo } from './types';

export abstract class AbstractDriver {

  abstract close(): Promise<void>;

  abstract connect(): Promise<ConnectionInfo>;

  // Optionals
  // abstract query(query: string, params?: any): Promise<QueryResult>;
  // abstract beginTransaction(): void;
  // abstract commitTransaction(): void;
  // abstract rollbackTransaction(); void;

}
