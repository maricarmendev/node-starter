
import chalk from 'chalk';

type OkMessage = (action: string, message?: string) => void
const defaultOkMessage = "has been successfully completed"
export const okMessage: OkMessage = (action, message) => {
    const okMessage = chalk.bold.green(`[${action}] ${message || defaultOkMessage}`)
    console.log(okMessage)
}

type ErrorMessage = (action: string, error?: any, message?: string) => void
const defaultErrorMessage = "An error occurred while performing the action."
export const errorMessage: ErrorMessage = (action, error?, message?) => {
    const errorMessage = chalk.bold.red(`[${action}] ${message || defaultErrorMessage}`)
    console.log(errorMessage)
    if (error) console.error(error)
}