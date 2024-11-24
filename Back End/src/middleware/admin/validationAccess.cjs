const jwt = require("jsonwebtoken");

const accessValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized: Diperlukan token",
    });
  }

  const token = authorization.split(" ")[1];
  const secretKey = process.env.JWT_SECRET;

  try {
    const jwtDecode = jwt.verify(token, secretKey);
    req.userData = jwtDecode;
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Unauthorized: Token tidak valid",
    });
  }
  next();
};

module.exports = accessValidation;
