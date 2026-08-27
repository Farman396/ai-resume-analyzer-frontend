import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-backend-1-bg79.onrender.com",
});

export default API;
