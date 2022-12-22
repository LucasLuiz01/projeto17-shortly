import { Router } from "express";
import { shortenUrl, getUrlId } from "../controllers/shorten.controller.js";
import { shortenSchenaValidation } from "../middlewares/shortenSchenaValidation.js";

const router = Router();

router.post("/urls/shorten", shortenSchenaValidation, shortenUrl);
router.get("/urls/:id", getUrlId);

export default router;