import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-backend-production-ada3.up.railway.app",
});

export default API;
