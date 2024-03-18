import { AddressInfo } from "node:net";
import { CorePresenter } from "../../../../ze-core/src/common/core/core.presenter";
import { ServerPresenterModel, ServerPresentable, ServerPresented } from "../models/server.presenter.model";


export class ServerPresenter extends CorePresenter<ServerPresentable, ServerPresented> implements ServerPresenterModel {
  private _server: ServerPresentable;

  constructor(server: ServerPresentable) {
    super(server);
    this._server = server;
  }

  get server(): ServerPresentable {
    return this._server;
  }

  get address(): string | AddressInfo | null {
    return this.toString(this._server?.address());
  }

  properties(): ServerPresented {
    return {
      address: this._server.address(),
    };
  }
}