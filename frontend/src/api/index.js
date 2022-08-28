import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = localStorage.getItem("token");
  }

  return req;
});

export const registerUser = (formData) =>
  API.post("/api/users/register", formData);
export const loginUser = (formData) => API.post("/api/users/login", formData);
