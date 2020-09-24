import React from "react";
import "./App.scss";
import StatsForm from "./components/form/StatsForm";
import StatsWeight from "./components/weight/StatsWeight";
import FireStatsWeight from "./components/weight/FireStatsWeight"
import Buffs from "./components/buffs/Buffs";
import DPS from "./components/dps/DPS";


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

  const outputRef = React.useRef(37931)
  const [output, setOutput] = React.useState(37931)

  const handleOutputChange = value => {
    if(value !== outputRef.current){
      setOutput(value)
    }
    outputRef.current = value;
  }

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
        <div className="left">
          <Buffs handleChange={handleBuffsChange} values={buffs}/>
        </div>

        <div className="mid">
          <div className="top">
            <StatsForm handleChange={handleValuesChange} values={values}/>
            <FireStatsWeight handleOutputChange={handleOutputChange} buffs={buffs} values={values}/>
            <StatsWeight handleOutputChange={handleOutputChange} buffs={buffs} values={values}/>
          </div>
          <div className="bottom">
            <DPS output={output}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
