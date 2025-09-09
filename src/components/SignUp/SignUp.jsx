import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AwesomeToast = ({ message, icon }) => (
  <div className="fixed animate-slide-in-top right-6 bottom-6 bg-gradient-to-br from-amber-500 to-amber-600 px-6 py-4 rounded-lg shadow-lg border-2 border-amber-300/20 flex items-center">
    <span className="text-2xl mr-2 text-[#2D1B0E]">{icon}</span>
    <div className="text-[#2D1B0E] font-semibold">{message}</div>
  </div>
);

const SignUp = () => {
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#1a120b]">
      {showToast && (
        <AwesomeToast message={"Sign Up Successful"} icon={<FaCheckCircle />} />
      )}
      <div className="w-full max-w-md bg-gradient-to-br from-[#2D1B0E] to-[#4a372a] p-8 rounded-lg shadow-lg border-4 border-amber-700/30 transform transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform">
          Create Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#2D1B0E] placeholder-amber-300 text-amber-100 border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all hover:scale-[1.02] duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#2D1B0E] placeholder-amber-300 text-amber-100 border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all hover:scale-[1.02] duration-300"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2D1B0E] placeholder-amber-300 text-amber-100 border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all hover:scale-[1.02] duration-300"
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute inset-y-0 right-0 flex items-center pr-4"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-[#2D1B0E] font-bold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
            Sign In <FaArrowRight />
          </button>
        </form>
        <div className="text-center mt-4">
          <Link
            to="/login"
            className="group inline-flex items-center text-amber-400 gap-2 hover:text-amber-600 transition-colors duration-300 "
          >
            <FaArrowLeft className="mr-2 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            <span className="transform group-hover:-translate-x-2 transition-all duration-300 ">
              Back To Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
