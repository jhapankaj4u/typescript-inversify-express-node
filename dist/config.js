"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class appConfig {
    static getConfigProvider() {
        return {
            server: {
                host: String(process.env.HOST) || "localhost",
                port: Number(process.env.PORT) || 3001
            },
            database: {
                database: "db_vear_clthng",
                username: String(process.env.DB_USERNAME),
                password: String(process.env.DB_PASSWORD),
                host: String(process.env.DB_HOST),
                port: Number(process.env.DB_PORT) || 3306,
            },
            token: {
                signature: {
                    access: String(process.env.JWT_ACCESS_SIGNATURE),
                    refresh: String(process.env.JWT_REFRESH_SIGNATURE),
                },
            }
        };
    }
}
exports.appConfig = appConfig;
//# sourceMappingURL=config.js.map