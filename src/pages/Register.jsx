import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {

    try {

      await registerUser(formData);

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      alert("Registration Failed");
    }
  };

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="bg-slate-800 p-10 rounded-xl w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 p-3 rounded"
        >
          Register
        </button>

      </div>

    </div>
  )
}

export default Register