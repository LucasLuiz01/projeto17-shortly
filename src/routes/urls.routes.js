import { Router } from "express";
import { shortenUrl } from "../controllers/shorten.controller.js";
import { shortenSchenaValidation } from "../middlewares/shortenSchenaValidation.js";

const router = Router();

router.post("/urls/shorten", shortenSchenaValidation, shortenUrl);

export default router;