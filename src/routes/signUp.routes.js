import {Router} from "express";
import { cadastro } from "../controllers/signup.controller.js";

const router = Router();

router.post("/signUp", cadastro)

export default router;