import { create } from "domain"
import express from "express"
import { configureProjectToStart, createEnvironmentesObject } from "./configure"

import { hash10, compareHash } from "./shared/helpers/encript"

const app = express()
const environments = createEnvironmentesObject()

async function startServer() {
    app.listen(environments.PORT)
}

configureProjectToStart(startServer)