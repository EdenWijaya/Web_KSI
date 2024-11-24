const dbPool = require("../config/database.cjs");

const setVisitor = (count) => {
  const query = "INSERT INTO web_visitor(visitor) VALUES (?)";
  const values = [count];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};

const getTotalVisitor = () => {
  const query = "SELECT COUNT(*) as total_visitor FROM web_visitor";

  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  setVisitor,
  getTotalVisitor,
};
