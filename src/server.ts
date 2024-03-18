require('dotenv').config()

import { app } from "./app";
import { logger } from "./common/logger/logger";
import { ServerPresenter } from "./server/presenters/server.presenter";

const server = app.listen(process.env.PORT ?? 7108, () => {
  const serverProperties = new ServerPresenter(server);
  logger.info(`Server listening @ ${serverProperties.address}`);
});
