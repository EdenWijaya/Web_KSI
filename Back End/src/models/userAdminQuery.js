import { dbPool } from "../config/database.js";

export const createAdmin = (username, password) => {
  const query = `INSERT INTO user_admin (username, password,refresh_token) VALUES (?, ?,?)`;
  const values = [username, password, null];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};

export const getAdmin = async () => {
  const query = "SELECT * FROM user_admin";

  try {
    const [rows] = await dbPool.execute(query);
    return rows;
  } catch (error) {
    throw error;
  }
};
