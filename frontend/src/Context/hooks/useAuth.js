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

  async function handleLogin(formData) {
    const data = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await api.post("/users/login", data);
      const token = response && response.data.token;
      if (token) {
        localStorage.setItem("NaverToken", token);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        history.push("/");
      }
    } catch (e) {
      alert("Usuario ou senha invalido");
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
