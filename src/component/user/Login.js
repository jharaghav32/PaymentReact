import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export const Login = (props) => {
  const [credential, setcredential] = useState({ email: "", password: "" })
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // to stop relaoding page
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',


      },

      body: JSON.stringify({ email: credential.email, password: credential.password })
    });
    const json = await response.json();
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.token);//localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
      history("/");
      
    }

    console.log(json)
  }
  const handleChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={handleChange} value={credential.email} id="email" aria-describedby="emailHelp" name="email" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={handleChange} value={credential.password} id="password" name="password" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
