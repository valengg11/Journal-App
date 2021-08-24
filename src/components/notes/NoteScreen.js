import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <form>
          <input
            type="text"
            placeholder="Some awesome title"
            className="notes__title-input"
            autocomplete="off"
          />
          <textarea
            placeholder="What happen today?"
            className="notes__textarea"
          />
          <div className="notes__image">
            <img
              src="https://c.stocksy.com/a/eHP500/z9/1288834.jpg"
              alt="woods"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
