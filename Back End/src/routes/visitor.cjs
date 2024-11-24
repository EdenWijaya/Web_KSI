const express = require("express");
const { setNewVisitor, totalVisitor } = require("../controller/webVisitor.cjs");

const visitorRouter = express.Router();

visitorRouter.post("/", setNewVisitor);
visitorRouter.get("/total", totalVisitor);

module.exports = visitorRouter;
