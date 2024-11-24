const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const laporanRouter = require("./routes/laporan.cjs");
const artikelRouter = require("./routes/artikel.cjs");
const adminRouter = require("./routes/admin.cjs");
const visitorRouter = require("./routes/visitor.cjs");
const { uploadHandler } = require("./middleware/file_upload/fileHandler.cjs");

const PORT = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(uploadHandler);

// API Routes
app.use("/laporan-lingkungan", laporanRouter);
app.use("/artikel-lingkungan", artikelRouter);
app.use("/admin", adminRouter);
app.use("/visitor", visitorRouter);



app.listen(PORT, () => {
  console.log(`Server running on : http://localhost:${PORT}`);
});
