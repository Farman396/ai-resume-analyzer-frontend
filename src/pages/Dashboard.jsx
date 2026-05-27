import { useState } from "react";

import {
  uploadResume,
  analyzeResume,
  matchJobDescription,
} from "../services/resumeService";

function Dashboard() {

  const [resumeText, setResumeText] =
  useState("");

const [jobDescription, setJobDescription] =
  useState("");

const [jobMatch, setJobMatch] =
  useState(null);  

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] = useState(null);

  

  const handleUpload = async () => {

    

    if (!file) {

      alert("Please select a PDF");

      return;
    }

    try {

      setLoading(true);

      // Upload Resume
      const uploadResponse =
        await uploadResume(file);

      const extractedText =
        uploadResponse.data.extractedText;

        setResumeText(extractedText);

      // Analyze Resume
      const analysisResponse =
        await analyzeResume(extractedText);

      setAnalysis(analysisResponse.data);

      setLoading(false);

      

    } catch (error) {

      console.log(error);

      alert("Upload Failed");

      setLoading(false);
    }
  };

  const handleJobMatch = async () => {

  if (!jobDescription) {

    alert("Please enter job description");

    return;
  }

  try {

    setLoading(true);

    const response =
      await matchJobDescription(
        resumeText,
        jobDescription
      );

    setJobMatch(response.data);

    setLoading(false);

  } catch (error) {

    console.log(error);

    alert("Job Match Failed");

    setLoading(false);
  }
};

  return (

    

    <div className="min-h-screen p-10 bg-slate-900 text-white">

      <h1 className="text-4xl font-bold mb-10">
        AI Resume Analyzer
      </h1>

      <div className="bg-slate-800 p-8 rounded-xl mb-10">

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
          className="mb-5"
        />

        <br />

        <button
          onClick={handleUpload}
          className="bg-purple-600 px-6 py-3 rounded-lg"
        >
          {
            loading
              ? "Analyzing..."
              : "Upload & Analyze"
          }
        </button>

      </div>

      {
        analysis && (

          <div className="space-y-8">

            {/* ATS SCORE */}

            <div className="bg-slate-800 p-8 rounded-xl">

              <h2 className="text-2xl font-bold mb-4">
                ATS Score
              </h2>

              <div className="text-6xl text-green-400">
                {analysis.atsScore}%
              </div>

            </div>

            {/* TECHNICAL SKILLS */}

            <div className="bg-slate-800 p-8 rounded-xl">

              <h2 className="text-2xl font-bold mb-4">
                Technical Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {
                  analysis.technicalSkills
                    ?.split(",")
                    .map((skill, index) => (

                      <span
                        key={index}
                        className="bg-blue-600 px-4 py-2 rounded-full"
                      >
                        {skill}
                      </span>
                    ))
                }

              </div>

            </div>

            {/* MISSING SKILLS */}

            <div className="bg-slate-800 p-8 rounded-xl">

              <h2 className="text-2xl font-bold mb-4">
                Missing Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {
                  analysis.missingSkills
                    ?.split(",")
                    .map((skill, index) => (

                      <span
                        key={index}
                        className="bg-red-600 px-4 py-2 rounded-full"
                      >
                        {skill}
                      </span>
                    ))
                }

              </div>

            </div>

            {/* SUGGESTIONS */}

            <div className="bg-slate-800 p-8 rounded-xl">

              <h2 className="text-2xl font-bold mb-4">
                Suggestions
              </h2>

              <ul className="list-disc pl-5 space-y-2">

                {
                  analysis.suggestions
                    ?.split(",")
                    .map((item, index) => (

                      <li key={index}>
                        {item}
                      </li>
                    ))
                }

              </ul>

            </div>

            {/* SUMMARY */}

            <div className="bg-slate-800 p-8 rounded-xl">

              <h2 className="text-2xl font-bold mb-4">
                Professional Summary
              </h2>

              <p className="text-gray-300 leading-8">
                {analysis.professionalSummary}
              </p>

            </div>

          </div>
        )
      }

    </div>

    
  )

  

  
}



export default Dashboard