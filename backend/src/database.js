import mysql from "mysql2";
import { config } from "./config";

export const pool = mysql.createPool(config);
