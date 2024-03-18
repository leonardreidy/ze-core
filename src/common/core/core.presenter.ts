import { inspect } from 'util';

export interface CorePresentable {
  [key: string]: any;
}

export interface CorePresented {
  [key: string]: any;
}

export interface CorePresenterModel<CorePresentable, CorePresented> {
  presentable: CorePresentable;
  toString(): string;
  properties(): CorePresented;
}

export abstract class CorePresenter<CorePresentable, CorePresented> implements CorePresenterModel<CorePresentable, CorePresented> {
  presentable: CorePresentable;

  protected constructor(presentable: CorePresentable) {
    this.presentable = presentable;
  }

  public toString(property?: any): string {
    return property ? inspect(property) : inspect(this.presentable);
  }

  public abstract properties(): CorePresented;
}