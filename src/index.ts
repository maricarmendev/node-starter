import express from 'express';
import { configureProjectToStart, getEnvs } from 'config';

const app = express();
const environments = getEnvs();

async function startServer() {
  app.listen(environments.PORT);
}

configureProjectToStart(startServer);
