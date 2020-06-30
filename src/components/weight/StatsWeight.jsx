import React from "react";
import "./stats-weight.scss";
import TextField from "../field/TextField";

const StatsWeight = (props) => {
  return (
    <div className="weight">
        <TextField label="1% Crit" value="200"></TextField>
        <TextField label="1% Hit" value="300"></TextField>
        <TextField label="1 Intellect" value="2"></TextField>
    </div>
  );
};


export default StatsWeight;
