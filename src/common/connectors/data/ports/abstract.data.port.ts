import { IDataPort } from '../types';

export abstract class AbstractDataPort implements IDataPort<any> {
  abstract create: (data: any) => Promise<any>;
  abstract read: (id: string) => Promise<any>;
  abstract update: (id: string, data: any) => Promise<any>;
  abstract delete: (id: string) => Promise<any>;
  abstract close: () => Promise<void>;
}