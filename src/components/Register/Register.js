import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className='register'>
        <form className='registration_form'>
            <h2>Sign up form</h2>
            <label for='full_name'>Full name</label>
            <input type="text" placeholder='Enter your full name' id='full_name' />
            <label for='username'>Username</label>
            <input type="text" placeholder='Enter your username' id='username' />
            <label for='email'>Email</label>
            <input type="email" placeholder='Enter your email' id='email' />
            <label for='phone'>Phone</label>
            <input type="tel" placeholder='Enter your phone no' id='phone' />
            <label for='password'>Password</label>
            <input type="password" placeholder="Enter your password" id='password' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Register