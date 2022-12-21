import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg"
import signUpRouter from "./routes/signUp.routes.js"

const app = express(); 
const {Pool} = pkg;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(signUpRouter)





app.listen(4000, ()=> console.log("Server rodando na porta 4000"));