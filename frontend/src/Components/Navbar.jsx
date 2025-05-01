import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { selectUser, userNotExist } from '../redux/reducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/userApi';
import toast from 'react-hot-toast';

const Navbar = () => {
  const user=useSelector(selectUser)
  const [logout]=useLogoutMutation();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout = async () => {
    try {
      const res = await logout();

      if ("data" in res) {
        localStorage.removeItem("token");
        dispatch(userNotExist());
        toast.success("Logged out successfully");
        navigate("/login");
      } else {
        toast.error(res.error?.data?.message || "Logout failed");
      }
    } catch (err) {
      toast.error("Logout error");
    }
  };
  return (
    <nav className="bg-blue-600 px-4 py-3 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold"> App</div>
        <div className="space-x-12">
          <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
          {user?<button onClick={handleLogout}>Logout</button>:""}
          {user?.role==="admin"?<Link to="/admin" className="hover:text-yellow-300">Admin</Link>:""}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
