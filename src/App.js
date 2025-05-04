import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GuessForm from "./components/GuessForm";
import SuccessMessage from "./components/SuccessMessage";

// Main App Component
function App() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  const [correctColor, setCorrectColor] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // Initialize the game with a random color
  useEffect(() => {
    pickRandomColor();
  }, []);

  // Function to pick a random color from the array
  const pickRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setCorrectColor(colors[randomIndex]);
    console.log(`Secret color: ${colors[randomIndex]}`); // Helpful for debugging
  };

  // Handle form submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Check if the guess is correct (case insensitive)
    if (userGuess.toLowerCase() === correctColor.toLowerCase()) {
      setMessage("That's right!");
      setIsCorrect(true);
    } else {
      setMessage("Sorry! Not my color");
      setIsCorrect(false);
    }
  };

  // Reset the game
  const resetGame = () => {
    pickRandomColor();
    setUserGuess("");
    setMessage("");
    setIsCorrect(false);
  };

  // Render the app
  return (
    <div className="app">
      <Header color={correctColor} />
      <main className="container">
        {!isCorrect ? (
          <GuessForm
            userGuess={userGuess}
            setUserGuess={setUserGuess}
            handleSubmit={handleSubmit}
            message={message}
          />
        ) : (
          <SuccessMessage resetGame={resetGame} />
        )}
      </main>
    </div>
  );
}

export default App;
