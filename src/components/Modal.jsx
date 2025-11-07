import React, { useState } from "react";
    import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ onClose, onSubmit }) => {
  const [text, setText] = useState("");
  const [due, setDue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      due,
    };

    onSubmit(newTodo);
    onClose();
  };

  return (
    <>
      <div className="form_css">
        <form onSubmit={handleSubmit} className="modal-content-box">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Due-Date-for-complete"
            onChange={(e) => setDue(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Add</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Modal;
