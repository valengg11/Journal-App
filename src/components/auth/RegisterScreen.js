import React from 'react'
import {Link} from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
        <h3 className="auth__title mb-5">Register</h3>
        <form>
        <input
            className="auth__input"
            type="text"
            placeholder="name"
            autocomplete="off"
            name="name"
          />  
          <input
            className="auth__input"
            type="text"
            placeholder="email"
            autocomplete="off"
            name="email"
          />
          <input
            className="auth__input"
            type="password"
            placeholder="password"
            name="password"
          />
          <input
            className="auth__input"
            type="password"
            placeholder="confirm password"
            name="password2"
          />
          <button className="btn btn-primary btn-block mb-1" type="submit">
            Register
          </button>
 
          <Link to="/auth/login" className="link mt-5">
            Already registered?
          </Link>
        </form>
      </>
    )
}
