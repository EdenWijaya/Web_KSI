import { jwtDecode } from "jwt-decode";

export const isTokenValid = () => {
  const token = localStorage.getItem("token");
  try {
    const decodeToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decodeToken.exp > currentTime;
  } catch (error) {
    // console.error("Error decoding token:", error);
    return false;
  }
};
