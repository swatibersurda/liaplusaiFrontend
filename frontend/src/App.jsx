import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProtectedRoute } from './Components/IsProtected'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { selectUser } from './redux/reducer/userReducer'
// import UpdateBlog from './Components/UpdateBlog'
const Blog=lazy(()=>import("./Components/Blog"))
const Register=lazy(()=>import("./Components/Register"))
const Login=lazy(()=>import("./Components/Login"))
const Admin=lazy(()=>import("./Components/Admin"))
const Loader=lazy(()=>import("./Components/Loader"))
const Addblog=lazy(()=>import("./Components/Addblog"))
const UpdateBlog=lazy(()=>import("./Components/UpdateBlog"))
function App() {
  
const user=useSelector(selectUser)
const isAuth=user?true:false
const isAdmin=user && user?.role==="admin"?true:false
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    <Routes>
      {/* register for landing page */}
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      {/* <Route path="/admin" element={<Admin/>}> */}
      {/* </Route> */}
      <Route element={<ProtectedRoute isAuthenticated={isAdmin} />}>
      <Route path="/admin" element={<Admin />} />
      </Route>

      {/* <Route path="/addblog" element={<Addblog/>}></Route> */}
      <Route element={<ProtectedRoute isAuthenticated={isAuth} />}>
      <Route path="/addblog" element={<Addblog />} />
      </Route>
      <Route path={`/updateblog/:id` } element={<UpdateBlog/>}></Route>
    </Routes>

    </Suspense>
    <Toaster position="top-left" />
    </BrowserRouter>
  )
} 


export default App
