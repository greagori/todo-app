import React from "react";
import RandomQuote from "./RandomQuote";
import "./Header.css";

function Header() {
	return (
		<div>
			<h1>My ToDo App</h1>
			<RandomQuote />
		</div>
	);
}

export default Header;
