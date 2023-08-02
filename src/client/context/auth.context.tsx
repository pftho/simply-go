import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { User } from "../types/user/types";

const API_URL = "http://localhost:3000";

type AuthContextValue = {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  registerUser: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  getToken: () => Promise<string>;
};

const AuthContext = React.createContext<AuthContextValue>({
  isLoggedIn: false,
  isLoading: true,
  user: null,
  login: () => Promise.reject(new Error("AuthContext is not initialized")),
  registerUser: () =>
    Promise.reject(new Error("AuthContext is not initialized")),
  logout: () => Promise.reject(new Error("AuthContext is not initialized")),
  getToken: () => Promise.reject(new Error("AuthContext is not initialized")),
});

function AuthProviderWrapper({ children }: { children?: React.ReactNode }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const getToken = async () => {
    const tokenValue = localStorage.getItem("authToken");
    return tokenValue || null;
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const loginResult: AxiosResponse<{ authToken: string }> = await axios.post(
      `${API_URL}/api/auth/login`,
      { email, password }
    );

    if (!loginResult.data.authToken) {
      throw new Error("No token returned on login");
    }

    localStorage.setItem("authToken", loginResult.data.authToken);

    await updateUserProfile();
  };

  const registerUser = async (
    username: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    const registerResult: AxiosResponse<{
      email: string;
      username: string;
      _id: string;
    }> = await axios.post(`${API_URL}/api/auth/register`, {
      username,
      email,
      password,
    });

    if (!registerResult.data) {
      throw new Error("No token returned on register");
    }

    await login(email, password);
  };

  const updateUserProfile = async () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setIsLoading(true);

      try {
        const verify = await axios.get(`${API_URL}/api/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        const profile = await axios.get(
          `${API_URL}/api/profile/user/${verify.data._id}`,
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
        );

        const user = profile.data;
        setUser(user);
        setIsLoggedIn(true);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsLoggedIn(false);
        setUser(null);
      }
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  useEffect(() => {
    updateUserProfile();
  }, []);

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logout = async () => {
    removeToken();
    updateUserProfile();
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        getToken,
        user,
        login,
        logout,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProviderWrapper, AuthContext, useAuth };
