import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="homepage__background">
        <div className="homepage__buttons">
        <Link to="/auth/register" className="btn btn-primary">
          Register
        </Link>
        <Link to="/auth/login" className="btn btn-primary">
          Login
        </Link>
        </div>
        <img
          className="homepage__image"
          src="../../assets/images/journal_app.png"
          alt="logo_journal_app"
        />
    </div>
  );
};
