const Sequelize = require("sequelize");

class Sequelizer {
    constructor(options, _logger) {
        this.logger = _logger
        this.connection = new Sequelize(
            options.name,
            options.login,
            options.passowrd,
            {
                host: options.host,
                port: options.port,
                dialect: options.dialect,
                operatorAliases: false,
                pool: {
                    max: 10,
                    min: 1,
                    acquire: 300000,
                    idle: 100000,
                }
            }
        );
    }
    checkOpen() {
        let name = this.name;
        return new Promise((resolve, reject) => {
          this.connection
            .authenticate()
            .then(() => {
              this.log.silly("Poprawnie połączono do bazy: " + name);
              resolve(true);
            })
            .catch((err) => {
              this.log.warn("Nie udało się połączyć do bazy:" + name);
              reject(new Error("Nie udało się połączyć do bazy" + err));
            });
        });
      }

}

module.exports = Sequelizer;