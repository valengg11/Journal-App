import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../redux/actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    name: "Valentina",
    email: "valen@gmail.com",
    password: 1234,
    password2: 1234,
  });

  const { name, email, password, password2 } = values;

  const handleResgister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
    console.log("Formulario correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("Password must be at least 5 characters"));
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
        <div className="auth__alert-error">Hola mundo</div>
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
