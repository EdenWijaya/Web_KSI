const bcrypt = require("bcrypt");
const { getAdmin, createAdmin } = require("../../models/userAdminQuery.cjs");
require("dotenv").config();

const saltRounds = 10; 

const hashPassword = async (password, username) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    await createAdmin(username, hashedPassword);
  } catch (error) {
    console.error(error);
  }
};

const getAdminAccount = async (req, res) => {
  try {
    const [data] = await getAdmin();
    return JSON.stringify(data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  hashPassword,
  getAdminAccount,
};
