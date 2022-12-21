import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg"

const app = express();
const {pool} = pkg;
dotenv.config();
app.use(cors());
app.use(express.json());

const connection = new Pool({
    connectionString: "postgres://shortlybootcamp_role:senha_super_hiper_ultra_secreta_do_role_do_bootcamp@localhost:5432/boardcamp"
})

app.listen(4000, ()=> console.log("Server rodando na porta 4000"));