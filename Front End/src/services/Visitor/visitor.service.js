import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const newVisitor = async () => {
  try {
    await axios.post(`${serverUrl}visitor`);
  } catch (error) {
    console.log(`${error.response.data.message}`);
  }
};

export const totalWebVisitor = async (callback) => {
  try {
    const res = await axios.get(`${serverUrl}visitor/total`);
    callback(res.data);
  } catch (error) {
    console.log(`${error.response.data.message}`);
  }
};
