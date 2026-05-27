import API from "./api";

export const uploadResume = async (file) => {

  const formData = new FormData();

  formData.append("file", file);

  return await API.post(
    "/resume/upload",
    formData,
    {
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const analyzeResume = async (resumeText) => {

  return await API.post(
    "/ai/analyze",
    resumeText,
    {
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "text/plain",
      },
    }
  );
};

export const matchJobDescription = async (
  resumeText,
  jobDescription
) => {

  return await API.post(
    "/ai/job-match",
    {
      resumeText,
      jobDescription,
    },
    {
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};