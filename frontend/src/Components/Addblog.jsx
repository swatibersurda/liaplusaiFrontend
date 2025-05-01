// import React, { useState } from 'react'

// const Register = () => {
//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const registerHandler=()=>{

//     }
//   return (
//     <div>
//        <div className="max-w-[1200px] mx-auto  bg-blue-500 rounded px-4 sm:px-6 my-10 lg:px-8">
//         <h1 className="text-center text-3xl text-pink-400 mt-10 pt-10 sm:pt-10">
//           Register Here
//         </h1>
//         <form className="space-y-6 mt-10">
//           {/* Name Field */}
//           <div className="max-w-[600px] mx-auto">
//             <label
//               htmlFor="name"
//               className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
//             >
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//             />
//           </div>
//           {/* Email Field */}
//           <div className="max-w-[600px] mx-auto">
//             <label
//               htmlFor="email"
//               className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="max-w-[600px] mx-auto">
//             <label
//               htmlFor="password"
//               className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="text-base sm:text-lg block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//             />
//           </div>
//           {/* Submit Button */}
//           <div className="max-w-[600px] mx-auto">
//             <button
//               onClick={registerHandler}
//               type="submit"
//               className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border bg-pink-500 text-white rounded-md  mb-5 hover:bg-pink-600"
//             >
//               Submit
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Register
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddPostMutation } from "../redux/api/blogApi";
import Navbar from "./Navbar";
const Addblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const [addPost] = useAddPostMutation();
  const addBlogHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await addPost({ title, content, author });
      if ("data" in res) {
        toast.success("Blog added successfully");
        navigate("/blog")
      } else {
        const message = res?.error?.data?.message || "Something went wrong";
        toast.error(message);
      }
    } catch (err) {
      toast.error("Error while adding post");
    }
  };
  return (
    <div>
      <Navbar/>
      <div className="max-w-[1000px] mx-auto  bg-blue-300 rounded px-4 sm:px-6 my-30 lg:px-8">
        <h1 className="text-center text-3xl text-black-400 mt-10 pt-10 sm:pt-10">
          Add Blog Here
        </h1>
        <form className="space-y-6 mt-10 pb-10">
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="title"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Email Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="content"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Content
            </label>
            <input
              id="content"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* Password Field */}
          <div className="max-w-[600px] mx-auto">
            <label
              htmlFor="author"
              className="block text-lg sm:text-2xl font-medium text-gray-700 font-serif"
            >
              Author
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="text-base sm:text-lg block w-full p-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Submit Button */}
          <div className="max-w-[600px] mx-auto">
            <button
              onClick={addBlogHandler}
              type="submit"
              className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border  text-black rounded-md  mb-10 hover:bg-blue-600"
            >
              AddBlog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
