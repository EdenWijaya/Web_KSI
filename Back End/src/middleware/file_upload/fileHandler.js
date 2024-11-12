import multer from "multer";

const storageImage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.fieldname === "gambar_laporan") {
      callback(null, "client_images/laporan");
    } else if (file.fieldname === "gambar_artikel") {
      callback(null, "client_images/artikel");
    } else {
      callback(null, null);
    }
  },
  filename: (req, file, callback) => {
    const uniqueSuffix =
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
    callback(null, uniqueSuffix);
  },
});

export const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    callback(null, true);
  } else {
    callback(
      new Error(
        "Hanya file berformat .jpg, .png, atau .jpeg yang diperbolehkan"
      ),
      false
    );
  }
};

export const uploadHandler = multer({
  storage: storageImage,
  fileFilter: fileFilter,
}).fields([
  { name: "gambar_laporan", maxCount: 1 },
  { name: "gambar_artikel", maxCount: 1 },
]);
