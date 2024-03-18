import { AddressInfo } from "node:net";
import { CorePresenterModel, CorePresented } from "../../../../ze-core/src/common/core/core.presenter";
import { Server } from "node:http";

export interface ServerPresenterModel extends CorePresenterModel<Server, ServerPresented> {
  [key: string ]: any;
}

export interface ServerPresentable extends Server {
  [key: string]: any;
}

export interface ServerPresented extends CorePresented {
  address?: string | AddressInfo | null;
}