import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-13gl.onrender.com" : "/api",
  withCredentials: true,
});
