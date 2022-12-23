import express from "express";
import cors from "cors";
import signUpRouter from "./routes/signUp.routes.js"
import urlsRouter from "./routes/urls.routes.js"
import infoRouter from "./routes/info.router.js"

const app = express(); 
app.use(cors());
app.use(express.json());
app.use(signUpRouter)
app.use(urlsRouter);
app.use(infoRouter);





app.listen(4000, ()=> console.log("Server rodando na porta 4000"));