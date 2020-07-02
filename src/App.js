import React from "react";
import "./App.scss";
import StatsForm from "./components/form/StatsForm";
import StatsWeight from "./components/weight/StatsWeight";
import Buffs from "./components/buffs/Buffs";


function App() {

  const [values, setValues] = React.useState({
    SP: 0,
    crit: 0,
    hit: 0,
    int: 0
  })

  const [buffs, setBuffs] = React.useState({
    ony: false,
    zandalar: false,
    songflower: false,
    dmt: false,
    dmf: false,
    gae: false,
    efp: false,
    flaskSP: false,
    wc: false,
    ai: false,
    BOK: false,
    motw: false,
  })

  const handleValuesChange = e => {
    const {name , value} = e.target
    setValues( prevState => ({
        ...prevState,
        [name] : value
    }))
  }

  const handleBuffsChange = e => {
    const {name} = e.target
    setBuffs( prevState => ({
        ...prevState,
        [name] : !prevState[name]
    }))
  }

  return (
    <div className="App">
      <h1>Lightweight Mage Tool</h1>
      <div className="container">
        <Buffs handleChange={handleBuffsChange} values={buffs}/>
        <StatsForm handleChange={handleValuesChange} values={values}/>
        <StatsWeight buffs={buffs} values={values}/>
      </div>
    </div>
  );
}

export default App;
