import React from "react";
import RandomQuote from "./RandomQuote";
import "./Header.css";

function Header() {
  return (
    <div>
      <div>
        <h1>My ToDo App</h1>
        <RandomQuote />
      </div>
      <div></div>
    </div>
  );
}

export default Header;
