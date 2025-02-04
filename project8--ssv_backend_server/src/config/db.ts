import { DataSource } from "typeorm";
import {User} from '../entites/userEntity'
import { BlacklistedToken } from "../entites/tokenBlacklistEntity"; 
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User,BlacklistedToken], // Add other entities here
  synchronize: true, // Set to false in production
  logging: false,
});

// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "root",
//   database: "MIT",
//   entities: ["entity/*.ts"], // Add other entities here
//   synchronize: false, // Set to false in production
//   logging: false,
// });
