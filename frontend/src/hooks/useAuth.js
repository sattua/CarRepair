import { useState } from "react";
import { login } from "../services/authApi";

export function useAuth() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const signIn = async (username, password) => {
    const res = await login(username, password, token);

    if (res.access_token) {
      setToken(res.access_token);
      localStorage.setItem("token", res.access_token);
    }

    return res;
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return { token, signIn, logout };
}