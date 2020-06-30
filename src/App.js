import React from "react";
import "./App.scss";
import StatsForm from "./components/form/StatsForm";
import StatsWeight from "./components/weight/StatsWeight";


function App() {
  return (
    <div className="App">
      <h1>Lightwieght Mage Tool</h1>
      <div className="container">
        <StatsForm/>
        <StatsWeight/>
      </div>
    </div>
  );
}

export default App;
