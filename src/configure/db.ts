import mongoose from 'mongoose';

import { createEnvironmentesObject } from './environments';

type ConnectToMongo = (
  onCoonect: () => void,
  onError: () => void,
  url?: string
) => void;

const envs = createEnvironmentesObject();
export const connectToMongo: ConnectToMongo = async (
  onConnect,
  onError,
  url?: string
) => {
  const db = mongoose.connection;
  db.on('error', onError);
  db.on('open', onConnect);
  await mongoose.connect(url || envs.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
