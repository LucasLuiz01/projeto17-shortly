import { Router } from "express";
import { userMe, ranking } from "../controllers/infos.controller.js";
const router = Router();

router.get("/user/me", userMe)
router.get("/ranking", ranking)

export default router