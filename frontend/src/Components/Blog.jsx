import React from "react";
import Navbar from "./Navbar";
import { useGetPostQuery } from "../redux/api/blogApi";

const Blog = () => {
  const { data, error, isLoading } = useGetPostQuery();
  



  return (
    <div>
      <Navbar />
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-[20px]">
        {data?.data?.map((item) => (
          <div key={item._id} className="text-center shadow-lg rounded-md p-4 bg-white">
            <div className="overflow-hidden w-full h-[250px] flex items-center justify-center">
              <img src={"src/assets/sign.jpg"} alt={item.title} className="h-full w-full" />
            </div>
            <h3 className="py-1 text-xl font-bold">{item.title}</h3>
            <p className="py-1">{item.content}</p>
            <p className="py-1 text-sm text-gray-600">By {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
