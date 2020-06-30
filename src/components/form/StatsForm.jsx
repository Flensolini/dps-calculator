import React from "react";
import "./stats-form.scss";
import StatInput from '../inputs/StatInput';

const StatsForm = (props) => {
  return (
    <div className="form">
        <StatInput label="Spell Power" type="number" />
        <StatInput label="Intellect" type="number" />
        <StatInput max={100} label="Crit" type="number" />
        <StatInput max={100} label="Hit" type="number" />
    </div>
  );
};


export default StatsForm;
