import React from 'react'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'

const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="*" element={<h1>Not found!</h1>}></Route> */}
        <Route path="*" element={<Navigate to={"/Home"}></Navigate>}></Route>
        
        
    </Routes>
   </BrowserRouter>
  )
}

export default Router