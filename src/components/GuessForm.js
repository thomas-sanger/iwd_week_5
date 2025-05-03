import React from "react";

const GuessForm = ({ userGuess, setUserGuess, handleSubmit, message }) => {
  // Handle form submission and prevent default behavior
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="form-container">
      <div>
        <input
          className="input"
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Enter a color name"
          required
        />
        <button className="submit-button" onClick={onSubmit}>
          Submit
        </button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default GuessForm;
