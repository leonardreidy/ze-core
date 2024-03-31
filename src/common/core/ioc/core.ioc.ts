import { IocContainer } from '@tsoa/runtime';
import { container } from 'tsyringe';
import neo4j from 'neo4j-driver';
import { logger } from '../../logger/logger';
import { DevService } from '../../../dev/service/dev.service';
import { BaseDriver } from '../../connectors/data/drivers/base.driver';

// Register dependencies with Inversion of Control
// (IOC) container (TSyringe)
// See docs: https://github.com/microsoft/tsyringe
container.register('CoreLogger', { useValue: logger });
container.register('Neo4JDriver', { useValue: neo4j });
container.register('BaseDriver', { useClass: BaseDriver })
container.register('DevService', { useClass: DevService });

// See docs: https://github.com/microsoft/tsyringe
export const iocContainer: IocContainer = {
  get: <T>(dependency: { prototype: T }): T => {
    return container.resolve<T>(dependency as never);
  },
};
