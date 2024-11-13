import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const AdminAuthentication = async (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;

  const data = {
    username: username,
    password: password,
  };

  try {
    const res = await axios.post(`${serverUrl}admin/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      alert(`${res.data.message}`);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin-dashboard";
    }
  } catch (error) {
    alert(`Login gagal : ${error.response.data.message}`);
  }
};
