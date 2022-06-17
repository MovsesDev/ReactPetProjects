
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Signup.css'

const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function signup() {

    }
    return (
        <div className="signup">
            <div className='signup__body'>
                <h3>Sign up</h3>
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
                <button onClick={signup}>Sign up</button>
                <p>Already have an account? <NavLink to='/'>Sign in</NavLink></p>
            </div>
        </div>
    )
}

export default Signup