
import React, { useState } from "react";
import { useRegisterMutation } from "../redux/api/userApi";
import { toast } from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom"
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  
  const registerHandler = async (event) => {
    // after regsitering send them to login page
    event.preventDefault();

    try {
      const res = await register({
        name,
        email,
        password,
      });
      
      if ("data" in res) {
        toast.success("Successfully Regsiter");
        navigate("/login");
      } else {
        const message = res.error?.data?.message || "Something went wrong";
        toast.error(message);
      }
    } catch (error) {
      toast.error("Registration Failed");
    }
  };
  return (
    <div>
      <div className="max-w-[1000px] mx-auto  bg-blue-300 rounded px-4 sm:px-6 my-30 lg:px-8">
        <h1 className="text-center text-3xl text-black-400 mt-10 pt-10 sm:pt-10">
          Register Here
        </h1>
        <form className="space-y-6 mt-10 pb-10">
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="name"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Email Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="email"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* Password Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="password"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Submit Button */}
          <div className="max-w-[600px] mx-auto">
            <button
              onClick={registerHandler}
              type="submit"
              className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border  text-black rounded-md  mb-10 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        <Link to="/login" className="text-xl text-center"><h3>Already register?Login here</h3></Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
