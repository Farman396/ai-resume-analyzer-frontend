import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-backend-jyj9.onrender.com",
});

export default API;
