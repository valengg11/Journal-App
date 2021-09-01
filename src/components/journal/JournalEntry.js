import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../redux/actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch()
  const note = {
    date,
    title,
    body,
    url,
  }
  const handleEntryClick = () => {
    dispatch(activeNote(id, note))
  }
  const noteDay = moment(date);
  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDay.format("dddd")}</span>
        <h4>{noteDay.format("Do")}</h4>
      </div>
    </div>
  );
};
