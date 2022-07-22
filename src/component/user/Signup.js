import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export const Signup = (props) => {
  const [state, setstate] = useState({ name: "", email: "", password: "" })
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // to stop relaoding page
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ name: state.name, email: state.email, password: state.password })
    });
    const json = await response.json();
    
      // save the auth token and redirect
      localStorage.setItem('token', json.token);//localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
      history("/");
      
    
    
    console.log(json)
  }
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="name" className="form-control" onChange={handleChange} value={state.name} id="name" aria-describedby="emailHelp" name="name" />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={handleChange} value={state.email} id="email" aria-describedby="emailHelp" name="email" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={handleChange} value={state.password} id="password" name="password" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

