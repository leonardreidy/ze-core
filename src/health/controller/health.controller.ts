import {
  Controller,
  Get,
  Route,
} from "tsoa";
import { HealthService } from "../service/health.service";
import { HealthModel } from "../model/health.model";

@Route("health")
export class HealthController extends Controller {
  @Get()
  public async getHealth(): Promise<HealthModel> {
    return new HealthService().getHealth();
  }
}