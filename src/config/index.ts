export * from './environments';
export * from './db';
export * from './prepareData';

import { configureEnvironments, getEnvs } from './environments';
import { connectToMongo } from './db';
import { errorMessage, okMessage } from 'shared';

const mongoAction = 'mongo';
const okMongoConnect = () => okMessage(mongoAction);
const errorMongoConnect = () => errorMessage(mongoAction);

type ConfigureProjectToStart = (onComplete: () => void) => void;
export const configureProjectToStart: ConfigureProjectToStart = async (
  onComplete
) => {
  console.log('\n\n Configuring project to start server ...');
  try {
    await configureEnvironments();

    const config = getEnvs();
    await connectToMongo(okMongoConnect, errorMongoConnect, config.MONGO_URL);

    onComplete();
  } catch (error) {
    errorMessage('configure-app');
  }
};
