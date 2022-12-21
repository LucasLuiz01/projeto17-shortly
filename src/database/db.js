import pkg from "pg";
import dotenv from "dotenv";
const {Pool} = pkg;
dotenv.config();
export const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});
console.log("console", process.env.DATABASE_URL)