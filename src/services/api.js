import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-backend-production-e1d7.up.railway.app",
});

export default API;