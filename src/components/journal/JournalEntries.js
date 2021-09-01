import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="journal__entr">
      {notes.map((note) => (
        <JournalEntry 
            key={note.id}
            {...note} 
        />
      ))}
    </div>
  );
};

