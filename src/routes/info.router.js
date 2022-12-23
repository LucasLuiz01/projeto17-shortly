import { Router } from "express";
import { userMe } from "../controllers/infos.controller.js";
const router = Router();

router.get("/user/me", userMe)

export default router