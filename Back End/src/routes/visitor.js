import express from "express";
import { setNewVisitor, totalVisitor } from "../controller/webVisitor.js";

const visitorRouter = express.Router();

visitorRouter.post("/", setNewVisitor);
visitorRouter.get("/total", totalVisitor);

export default visitorRouter;
