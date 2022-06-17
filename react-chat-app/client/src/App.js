import "./App.css";
import { useState } from "react";
import Chat from "./components/Chat";
import { NavLink } from 'react-router-dom'
import Login from "./pages/Login/Login";
import Users from "./components/Users";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="App">
      <nav className="header">
        <NavLink to='/'>Chat</NavLink>
        <NavLink to='/signup'>Sign up</NavLink>
        <NavLink to='/'>Login</NavLink>
      </nav>



      <section className="content">
        {!showChat ? (<Login setShowChat={setShowChat} />) : (<div> <Users className='users'/>  <Chat /> </div>)}
      </section>
    </div>
  );
}

export default App;
