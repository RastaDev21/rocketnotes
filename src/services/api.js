import axios from "axios";

export const api = axios.create({
  baseURL: "https://notes-api-20z9.onrender.com",
});
