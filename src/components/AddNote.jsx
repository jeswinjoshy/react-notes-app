import { useState, useRef } from "react";
import { MdAdd } from "react-icons/md";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const characterLimit = 300;
  const noteRef = useRef(null);

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleAddButtonClick = () => {
    setShowPopup(true);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      setShowPopup(false);
    }
  };

  const handleCancelClick = () => {
    setShowPopup(false);
  };

  return (
    <div className="add-note-container">
      <div className="note new" ref={noteRef}>
        <MdAdd className="add-icon" onClick={handleAddButtonClick} />
      </div>

      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <textarea
              rows="10"
              cols="50"
              placeholder="Type to add a note..."
              value={noteText}
              onChange={handleChange}
            ></textarea>
            <div className="footer">
              <small>{characterLimit - noteText.length} Remaining</small>
              <div>
                <button onClick={handleSaveClick} className="submit">
                  SUBMIT
                </button>
                <button onClick={handleCancelClick} className="cancel">
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
