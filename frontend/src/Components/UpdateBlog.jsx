
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAddPostMutation, useUpdatePostMutation } from "../redux/api/blogApi";
import Navbar from "./Navbar";
const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const [updatePost] = useUpdatePostMutation();
  const {id}=useParams();
  const updateBlogHandler = async (event) => {
    event.preventDefault();
    try {
        let payload={}
        if(title!==""){
            payload.title=title
        }
        if(content!==""){
            payload.content=content
        }
        if(author!==""){
            payload.author=author
        }
    
      const res = await updatePost({id,payload});
      
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
         Update Blog Here
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
              onClick={updateBlogHandler}
              type="submit"
              className="text-lg sm:text-2xl font-bold block w-full sm:w-[200px] mx-auto p-2 border  text-black rounded-md  mb-10 hover:bg-blue-600"
            >
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
