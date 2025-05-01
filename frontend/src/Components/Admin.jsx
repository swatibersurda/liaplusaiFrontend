import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDeletePostMutation, useGetPostQuery } from "../redux/api/blogApi";
import toast from "react-hot-toast";

const Admin = () => {
  const { data, error, isLoading,refetch } = useGetPostQuery();
  const [deletePost] = useDeletePostMutation();
  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      toast.success("Product deleted successfully");
      refetch()
    } catch (err) {
      toast.error("Delete failed: ", err);
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Admin Table
      </h2>
      <table className="min-w-full border border-blue-600">
        <thead>
          <tr>
            <th className="border p-2 text-left">_id</th>
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Author</th>
            <th className="border p-2 text-left">Delete</th>
            <th className="border p-2 text-left">Add</th>
            <th className="border p-2 text-left">Update</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="border p-2">{user._id}</td>
              <td className="border p-2">{user.title}</td>
              <td className="border p-2">{user.author}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
              <td className="border p-2">
                <Link to={"/addblog"}>add</Link>
              </td>
              <td className="border p-2">
                <Link to={`/updateblog/${user?._id}`}>update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
