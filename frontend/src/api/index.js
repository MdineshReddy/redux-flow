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

// Posts
export const createPost = (formData) => API.post("/api/posts", formData);
export const getAllPosts = () => API.get("/api/posts");
export const getPost = (id) => API.get(`/api/posts/${id}`);
export const editPost = (id, formData) =>
  API.patchForm(`/api/posts/${id}`, formData);
export const deletePost = (id) => API.delete(`/api/posts/${id}`);
