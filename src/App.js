import React from "react";
import Header from "./components/Header";
import TaskFeed from "./components/TaskFeed";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      <Header />

      <TaskFeed />
    </div>
  );
}
export default App;