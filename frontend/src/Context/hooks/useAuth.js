import { useEffect, useState } from "react";

import api from "../../services/api";
import history from "../../history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("NaverToken");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin() {
    const data = {
      email: "testing-user@nave.rs",
      password: "nave1234",
    };

    const response = await api
      .post("/users/login", data)
      .catch((e) => console.log(e));

    const token = response.data.token;

    if (token) {
      localStorage.setItem("NaverToken", JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      history.push("/");
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("NaverToken");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
