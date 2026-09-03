import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-backend-nng2.onrender.com",
});

export default API;
