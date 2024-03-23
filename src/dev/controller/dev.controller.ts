import {
  Controller,
  Get,
  Route,
} from 'tsoa';
import { DevModel } from '../model/dev.model';
import { injectable } from 'tsyringe';
import { DevService } from '../service/dev.service';

@injectable()
@Route('dev')
export class DevController extends Controller {
  constructor(private devService: DevService) {
    super();
  }

  @Get()
  public async getDevInfo(): Promise<DevModel> {
    return this.devService.getDevInfo();
  }
}

