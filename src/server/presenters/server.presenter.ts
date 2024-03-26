import { AddressInfo } from 'node:net';
import { CorePresenter } from '../../common/core/core.presenter';
import { ServerPresenterModel, ServerPresentable, ServerPresented } from '../models/server.presenter.model';


export class ServerPresenter extends CorePresenter<ServerPresentable, ServerPresented> implements ServerPresenterModel {
  private _server: ServerPresentable;

  constructor(server: ServerPresentable) {
    super(server);
    this._server = server;
  }

  public get server(): ServerPresentable {
    return this._server;
  }

  public get address(): string | AddressInfo | null {
    return this.toString(this._server?.address());
  }

  public properties(): ServerPresented {
    return {
      address: this._server.address(),
    };
  }
}