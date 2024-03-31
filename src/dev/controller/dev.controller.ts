import {
  Controller,
  Get,
  Route,
} from 'tsoa';
import { DevModel } from '../model/dev.model';
import { inject, injectable } from 'tsyringe';
import { DevService } from '../service/dev.service';

@injectable()
@Route('dev')
export class DevController extends Controller {
  constructor(@inject('DevService') private devService: DevService) {
    super();
  }

  @Get('info')
  public async getDevInfo(): Promise<DevModel> {
    return await this.devService.getDevInfo();
  }

}

