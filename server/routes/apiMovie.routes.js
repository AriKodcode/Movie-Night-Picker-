import express from "express";
import { loadData } from "../controllers/apiMovie.controllers.js";

const router = express();

router.get("/", loadData);
export default router;
