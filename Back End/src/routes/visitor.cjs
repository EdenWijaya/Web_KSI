import express from "express";
import { setNewVisitor, totalVisitor } from "../controller/webVisitor.cjs";

const visitorRouter = express.Router();

visitorRouter.post("/", setNewVisitor);
visitorRouter.get("/total", totalVisitor);

export default visitorRouter;
