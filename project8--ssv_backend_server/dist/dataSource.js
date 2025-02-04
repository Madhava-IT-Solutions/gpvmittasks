"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   entities: [], // Add other entities here
//   synchronize: false, // Set to false in production
//   logging: false,
// });
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "MIT",
    entities: ["entity/*.ts"], // Add other entities here
    synchronize: false, // Set to false in production
    logging: false,
});
