import React from "react";
import './Navigation.css'
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
const Navigation = () => {
  return (
    <div className="navigation">
    <nav className="nav">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='chat'>Chat</NavLink>
        <NavLink to='signup'>Sign up</NavLink>
        <NavLink to='login'>Login</NavLink>
    </nav>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='chat' element={<Chat/>}/>
<Route path='signup' element={<Signup/>}/>
<Route path='login' element={<Login/>}/>
  </Routes>

    </div>
  );
};

export default Navigation;

