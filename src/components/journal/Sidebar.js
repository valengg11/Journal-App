import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { JournalEntries } from "./JournalEntries";
import { startLogout } from "../../redux/actions/auth";
import { startNewNote } from "../../redux/actions/notes";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const handleAddNew = () => {
    dispatch(startNewNote());
  };
  return (
    <div className="journal__sidebar">
      <div className="journal__overflow">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>{name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__body">
        <div className="journal__new-entry" onClick={handleAddNew}>
          <i className="far fa-calendar-plus fa-5x"></i>
          <p className="journal__new-entry-title">New entry</p>
        </div>
        <JournalEntries />
      </div>
      </div>
    </div>
  );
};
