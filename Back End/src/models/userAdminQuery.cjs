const dbPool = require("../config/database.cjs");

const createAdmin = (username, password) => {
  const query = `INSERT INTO user_admin (username, password, refresh_token) VALUES (?, ?, ?)`;
  const values = [username, password, null];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};

const getAdmin = async () => {
  const query = "SELECT * FROM user_admin";

  try {
    const [rows] = await dbPool.execute(query);
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAdmin,
  getAdmin,
};
