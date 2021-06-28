import { config as dotEnvConfig, DotenvConfigOutput } from "dotenv"

type ConfigureEnvironments = () => Promise<DotenvConfigOutput>
export function configureEnvironments() {
    return new Promise((res, rej) => {
        const resp: DotenvConfigOutput = dotEnvConfig()
        if (resp.error) rej(resp)
        res(resp)
    })
}

interface Environments {
    MONGO_URL: string
    PORT: number | string
}

export const createEnvironmentesObject = (): Environments => ({
    MONGO_URL: process.env.MONGO_URL || "",
    PORT: process.env.PORT || 3000
})