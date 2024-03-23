import { ServerInfo } from 'neo4j-driver';

export interface DevInfo {
  [key: string]: unknown;
  message: string;
  serverInfo: ServerInfo;
}

export interface DevModel {
  data: DevInfo;
}