export const LogoutHandler = async () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
