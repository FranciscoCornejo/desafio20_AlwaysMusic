import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

const config = {
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  allowExitOnIdle: true,
};

const pool = new pg.Pool(config);

export default pool;
