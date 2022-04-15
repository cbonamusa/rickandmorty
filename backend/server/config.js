/**
 * Config file for the use of env vars
 */
const checkEnvVar = (name) => {
    if (name in process.env) {
        return process.env[name]
    }
    throw new Error(`Missing environtment variable ${name}`)
}
module.exports = {
    DB_USER: checkEnvVar('DB_USER'),
    DB_PASSWORD: checkEnvVar('DB_PASSWORD'),
    DB_HOST: checkEnvVar('DB_HOST'),
    DB_PORT: checkEnvVar('DB_PORT'),
    DB_DATABASE: checkEnvVar('DB_DATABASE'),
    PORT: checkEnvVar('PORT'),
    JWT_SECRET: checkEnvVar('JWT_SECRET'),
    JWT_EXPIRATION_TIME: checkEnvVar('JWT_EXPIRATION_TIME'),
};