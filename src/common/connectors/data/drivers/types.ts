export interface DriverOptionsConfig {
  pass: string;
  uri: string;
  user: string;
  database?: string;
  host?: string;
  port?: string | number;
}

export interface ConnectionInfo {
  [key: string]: any;
}

