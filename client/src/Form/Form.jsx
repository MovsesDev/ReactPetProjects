// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// // import AuthContext from '../context/AuthProvider'
// import axios from '../api/axios'

// const Form = () => {
//     // const { setAuth } = useContext(AuthContext)
//     const [login, setLogin] = useState('')
//     const [password, setPassword] = useState('')
//     const [errMsg, setErrMsg] = useState('')
//     const [success, setSuccess] = useState(false)
//     const errRef = useRef()
//     const userRef = useRef()

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         // try {
            
//         //     setLogin('')
//         //     setPassword('')
//         //     setSuccess(true)
//         // } catch (e) {
//         //     if (!e?.response) {
//         //         setErrMsg('No Server Response');
//         //     } else if (e.response?.status === 400) {
//         //         setErrMsg('Missing Username or Password');
//         //     } else if (e.response?.status === 401) {
//         //         setErrMsg('Unauthorized');
//         //     } else {
//         //         setErrMsg('Login Failed');
//         //     }
//         //     errRef.current.focus();

//         // }

//     }

//     useEffect(() => {
//         userRef.current.focus()
//     }, [])

//     useEffect(() => {
//         setErrMsg('')
//     }, [login, password])

//     return (
//         <div>
//             {success ? (<section>

//                 <div>You are logged in <br />
//                     <span><a href="/">Go to home</a></span></div>
//             </section>
//             ) : (
//                 <section>

//                     <p ref={errRef}>{errMsg}</p>
//                     <h1>Sign in</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label htmlFor="username">Username:</label><br />
//                             <input
//                                 ref={userRef}
//                                 type="text"
//                                 placeholder='Enter login...'
//                                 onChange={e => setLogin(e.target.value)}
//                                 value={login}
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password">Password:</label><br />
//                             <input
//                                 type="password"
//                                 placeholder='Enter password...'
//                                 onChange={e => setPassword(e.target.value)}
//                                 value={password}
//                                 required
//                             />
//                         </div>

//                         <Link to='/'>
//                             <button className='btn btn-success' onClick={handleSubmit}>Log in</button>
//                         </Link>
//                     </form>

//                     <p>Dont have an account? <br />
//                         <span> <a href="/">Sign up</a></span>
//                     </p>
//                 </section>
//             )}
//         </div>
//     )
// }

// export default Form