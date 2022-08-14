import React, { useState } from 'react'

function Login ({setUser}) {


    const [username,setUsername]=useState('')

    function handleSubmit(event){
        event.preventDefault();
        setUser(username);

    }
 
  return (
    <div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
            <input onChange={event=>setUsername(event.target.value)} type="text"  placeholder='Username'/>
            <button type='submit'>Login</button>

        </form>
       
    </div>
   
  )
}

export default Login