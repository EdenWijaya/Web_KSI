import express from "express";
import adminAuth from "../controller/admin/adminAuthentication.cjs";

const adminRouter = express.Router();

adminRouter.post("/login", adminAuth);

export default adminRouter;
