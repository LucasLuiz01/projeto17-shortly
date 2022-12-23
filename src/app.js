import express from "express";
import cors from "cors";
import signUpRouter from "./routes/signUp.routes.js";
import urlsRouter from "./routes/urls.routes.js"
import infoRouter from "./routes/info.router.js"
import dotenv from "dotenv";

const app = express(); 
app.use(cors());
app.use(express.json());
dotenv.config();
app.use(signUpRouter)
app.use(urlsRouter);
app.use(infoRouter);



const port = process.env.PORT;

app.listen(port, ()=> console.log(`Server rodando na porta ${port}`));