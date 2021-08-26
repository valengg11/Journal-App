import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../redux/actions/ui";
import { startRegisterEmailPasswordName } from "../../redux/actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui);
  const {msgError} = state;

  const [values, handleInputChange] = useForm({
    name: "Valentina",
    email: "valengg@gmail.com",
    password: 123456,
    password2: 123456,
  });

  const { name, email, password, password2 } = values;

  const handleResgister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterEmailPasswordName(email, password.toString() , name)) 
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.length < 6) {
      dispatch(setError("Password should be at least 6 characters"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("Passwords doesn`t match each other"));
      return false;
    }

    dispatch(removeError());

    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleResgister}>
        {
          msgError &&
          (
            <div className="auth__alert-error">
              {msgError}
            </div>
          )
        }
        <input
          className="auth__input"
          type="text"
          placeholder="name"
          autoComplete="off"
          name="name"
          onChange={handleInputChange}
          value={name}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="email"
          autoComplete="off"
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="confirm password"
          name="password2"
          onChange={handleInputChange}
          value={password2}
        />
        <button className="btn btn-primary btn-block mb-1" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link mt-5">
          Already registered?
        </Link>
      </form>
    </>
  );
};
