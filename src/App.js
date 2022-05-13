import React from "react";
import Header from "./components/Header";
import TaskFeed from "./components/TaskFeed";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		// BEM
		<div className="app">
			<div>
				<Header />
				<TaskFeed />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}
export default App;
