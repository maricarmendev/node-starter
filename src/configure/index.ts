export * from "./environments"
export * from "./db"
export * from "./dataRequiredToFirstStart"

import { configureEnvironments, createEnvironmentesObject } from "./environments"
import { connectToMongo } from "./db"
import { errorMessage, okMessage } from "shared"

const envsAction = "envs"
const okEnvsConnect = () => okMessage(mongoAction)
const errorEnvsConnect = () => errorMessage(mongoAction)

const mongoAction = "mongo"
const okMongoConnect = () => okMessage(mongoAction)
const errorMongoConnect = () => errorMessage(mongoAction)

type ConfigureProjectToStart = (onComplete: () => void) => void
export const configureProjectToStart: ConfigureProjectToStart = async (onComplete) => {
    console.log('\n\n Configuring project to start server ...')
    try {
        await configureEnvironments()
        const config = createEnvironmentesObject()
        await connectToMongo(okMongoConnect, errorMongoConnect, config.MONGO_URL)
        onComplete()
    } catch (error) {
        errorMessage("configure-app")
    }
}