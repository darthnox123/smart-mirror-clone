const join = require("path").join;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const databaseConfig = require(join(__dirname, 'dist', 'src/config/database.config.js'))

module.exports = {
    "type": 'postgres',
    "host": databaseConfig.default().host,
    "port": databaseConfig.default().port,
    "username": databaseConfig.default().username,
    "password": databaseConfig.default().password,
    "database": databaseConfig.default().database,
    "entities": [join(__dirname, "dist", "src/entity/**/*entity.js")],
    "migrations": [join(__dirname, "dist", "migration/**/*.js")],
    "cli": {
        "migrationsDir": "migration"
    }
}