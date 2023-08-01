import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  const nextConfig = config;
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    nextConfig.headers.Authorization = `Bearer ${token}`;
  }
  return nextConfig;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    throw error;
  }
);

export function getUploadUrl() {
  return `${API_URL}/upload`;
}

export function getUploadHeader() {
  return { Authorization: `Bearer ${localStorage.getItem("token")}` };
}

export default api;

export const apiFormData = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
  timeout: 5000,
});

apiFormData.interceptors.request.use((config) => {
  const nextConfig = config;
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    nextConfig.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiFormData.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    throw error;
  }
);

export const getApiAssets = (url: string) => API_URL + url;
