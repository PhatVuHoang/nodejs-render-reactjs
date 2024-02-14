import express from "express";
import Home from "../controllers/home.controller";
const router = express.Router();

router.get("", Home.getContent);

export default router;
