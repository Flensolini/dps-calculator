import React from "react";
import "./App.scss";
import StatsForm from "./components/form/StatsForm";
import StatsWeight from "./components/weight/StatsWeight";


function App() {

  const [SP, setSP] = React.useState(0);
  const [crit, setCrit] = React.useState(0);
  const [hit, setHit] = React.useState(0);
  const [int, setInt] = React.useState(0);


  const handleSPChange = (newVal) => {
    setSP(newVal)
  }
  const handleCritChange = (newVal) => {
    setCrit(newVal)
  }
  const handleHitChange = (newVal) => {
    setHit(newVal)
  }
  const handleIntChange = (newVal) => {
    setInt(newVal)
  }

  return (
    <div className="App">
      <h1>Lightweight Mage Tool</h1>
      <div className="container">
        <StatsForm spChange={handleSPChange} critChange={handleCritChange} hitChange={handleHitChange} intChange={handleIntChange} spValue={SP} critValue={crit} hitValue={hit} intValue={int}/>
        <StatsWeight SP={SP} crit={crit} hit={hit} int={int}/>
      </div>
    </div>
  );
}

export default App;
