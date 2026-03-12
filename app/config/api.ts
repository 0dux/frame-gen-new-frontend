import axios from "axios";

const isDev = process.env.NODE_ENV === "development";

const api = axios.create({
  baseURL: isDev
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    : "", // proxy the frontend during development
  withCredentials: true,
});

export default api;
