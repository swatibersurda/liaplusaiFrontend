import React, { useState } from 'react'
import { userExist, userNotExist } from '../redux/reducer/userReducer'
import { useLoginMutation } from '../redux/api/userApi'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [login]=useLoginMutation()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const loginHandler = async (e) => {
      e.preventDefault();
      try {
        const res = await login({ email, password });
  
        if ("data" in res) {
          const userData = res.data?.data;
  
          dispatch(userNotExist());
          dispatch(userExist(userData));
          localStorage.setItem("token", userData?.accessToken);
          toast.success("Successfully Login");
          navigate("/blog");
        } else {
          const message = res?.error?.data?.message || "Something went wrong";
          toast.error(message);
        }
      } catch (err) {
        toast.error("Failed to Login");
      }
    };
    
  return (
    <div>
       <div className="max-w-[1000px] mx-auto  bg-blue-300 rounded px-4 sm:px-6 my-30 lg:px-8">
        <h1 className="text-center text-3xl text-black-400 mt-10 pt-10 sm:pt-10">
          Login Here
        </h1>
        <form className="space-y-6 mt-10 pb-10">
          
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
              onClick={loginHandler}
              type="submit"
              className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border  text-black rounded-md  mb-10 hover:bg-blue-600"
            >
              Submit
            </button>
        <Link to="/" className="text-xl text-center"><h3>Not Register ? Regsiter here....</h3></Link>
          </div>
         
        </form>
      </div>
    </div>
  )
}

export default Login
