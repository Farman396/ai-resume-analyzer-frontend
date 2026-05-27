import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {

    try {

      const response = await loginUser(formData);

      localStorage.setItem(
        "token",
        response.data
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials");
    }
  };

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="bg-slate-800 p-10 rounded-xl w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

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
          onClick={handleLogin}
          className="w-full bg-blue-600 p-3 rounded"
        >
          Login
        </button>

        <p className="mt-5 text-center">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-400 ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login