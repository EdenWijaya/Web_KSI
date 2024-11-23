import express from "express";
import "dotenv/config";
import cors from "cors";
import laporanRouter from "./routes/laporan.cjs";
import artikelRouter from "./routes/artikel.cjs";
import adminRouter from "./routes/admin.cjs";
import visitorRouter from "./routes/visitor.cjs";
import { uploadHandler } from "./middleware/file_upload/fileHandler.cjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(uploadHandler);

app.use("/laporan-lingkungan", laporanRouter);
app.use("/artikel-lingkungan", artikelRouter);
app.use("/admin", adminRouter);
app.use("/visitor", visitorRouter);

app.listen(PORT, () => {
  console.log(`Server running on : http://localhost:${PORT}`);
});
