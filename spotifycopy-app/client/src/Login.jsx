import React from 'react'
const clientId = 'fe88cb1195fd4049bcf9388decd65316'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Login = () => {
  return (
    <div className='d-flex justify-content-center
    align-items-center' style={{minHeight: '100vh'}}>
        <a className='btn btn-success btn-lg' href={AUTH_URL}>Login with Spotify</a>
    </div>
  )
}

export default Login