import React from "react";

const Header = ({ color }) => {
  // Render the header with a dynamic background color
  return (
    <header className="header" style={{ backgroundColor: color }}>
      <h1>Guess My Color</h1>
    </header>
  );
};

export default Header;
