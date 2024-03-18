import { HealthModel } from "../model/health.model";

export class HealthService {
  public getHealth(): HealthModel {
    const health: HealthModel = {
      status: "OK",
      code: 1,
    };
    return health;
  }
}