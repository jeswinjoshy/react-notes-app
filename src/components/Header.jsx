import React from "react";

const Header = ({ handleThemeDarkMode }) => {
  return (
    <div className="header">
      <h1>Sticky Wall</h1>
      <button
        onClick={() =>
          handleThemeDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="submit"
      >
        Theme
      </button>
    </div>
  );
};

export default Header;
