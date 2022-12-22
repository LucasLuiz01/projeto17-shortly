import {Router} from "express";
import { cadastro, login } from "../controllers/session.controller.js";
import { signUpSchenaValidation } from "../middlewares/signUpValidation.js";
import { signInSchemaValidation } from "../middlewares/sigInSchenaValidation.js";

const router = Router();

router.post("/signUp",signUpSchenaValidation, cadastro)
router.post("/signin",signInSchemaValidation, login);

export default router;

