import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../redux/actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.notes);
  
  const { date } = active;

  const screenDate = moment(date)

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className="notes__appbar">
      <span>{screenDate.format("dddd, MMMM Do YYYY")}</span>
      <input
        id="fileSelector"
        name="file"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button onClick={handlePictureClick} className="btn">
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
