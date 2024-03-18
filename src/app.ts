import express, { json, urlencoded, Response as ExResponse, Request as ExRequest, NextFunction} from 'express';
import { ValidateError } from 'tsoa';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';
import { morganMiddleware } from './common/middleware/morgan.middleware';
import { logger } from './common/logger/logger';
import 'reflect-metadata'; //tsyringe/ioc

export const app = express();

// Use body parser to read sent json payloads
app.use(urlencoded({ extended: true, }));

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('./spec/swagger.json')));
});

// winston/morgan for logging
app.use(morganMiddleware);

app.use(json());

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Step aside. Nothing to see here!",
  });
});

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction,
) {
  if (err instanceof ValidateError) {
    logger.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  return next();
});