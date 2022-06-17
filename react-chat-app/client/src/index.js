import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Chat from "./components/Chat";
import Signup from "./pages/Signup/Signup";
import reportWebVitals from "./reportWebVitals";
import './index.css'

ReactDOM.render(
    <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<App/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
  </React.StrictMode>
    </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
