import React from "react";

const Header = (props) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
      <h4>{props.description}</h4>
    </header>
  );
};

export default Header;