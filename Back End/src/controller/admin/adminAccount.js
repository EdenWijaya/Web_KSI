import bcrypt from "bcrypt";
import { getAdmin, createAdmin } from "../../models/userAdminQuery.js";
import "dotenv/config";

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    await createAdmin(username, hashedPassword);
  } catch (error) {
    console.error(error);
  }
};

export const getAdminAccount = async (req, res) => {
  try {
    const [data] = await getAdmin();
    return JSON.stringify(data);
  } catch (error) {
    throw error;
  }
};
