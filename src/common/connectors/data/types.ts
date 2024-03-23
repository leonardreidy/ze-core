export interface IDataPort<T> {
  create: (data: any) => Promise<T>;
  read: (attributes: any) => Promise<T>;
  update: (attributes: any, data: any) => Promise<T>;
  delete: (attributes: any) => Promise<any>;
}

export interface IDataAdapter {
  create: (data: any) => Promise<any>;
  read: (attributes: any) => Promise<any>;
  update: (attributes: any, data: any) => Promise<any>;
  delete: (attributes: any) => Promise<any>;
}