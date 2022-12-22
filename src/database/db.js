import pkg from "pg";
import dotenv from "dotenv";
const {Pool} = pkg;
dotenv.config();
export const connection = new Pool({
  connectionString: "postgres://postgres:123456@localhost:5433/shortly"
});