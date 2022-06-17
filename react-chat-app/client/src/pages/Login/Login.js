
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Login.css'

const Login = ({setShowChat}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        if(username && password) {
            setShowChat(true)
        }
    }
    return (
        <div className="signup">
            <div className='signup__body'>
                <h3>Login</h3>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <button onClick={login}>Login</button>
                <p>Dont have an account? <NavLink to='signup'> Sign up</NavLink> </p>
            </div>
        </div>
    )
}

export default Login