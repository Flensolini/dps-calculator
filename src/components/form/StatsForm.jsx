import React from "react";
import PropTypes from 'prop-types';
import "./stats-form.scss";
import StatInput from '../inputs/StatInput';

const StatsForm = (props) => {
  const { values, handleChange} = props;
  return (
    <div className="form">
        <StatInput onChange={handleChange} name="SP" value={values.SP} label="Spell Power" />
        <StatInput onChange={handleChange} name="crit" value={values.crit} label="Crit" />
        <StatInput onChange={handleChange} name="hit" value={values.hit} max={100} label="Hit"/>
        <StatInput onChange={handleChange} name="int" value={values.int} max={100} label="Int"/>
    </div>
  );
};

StatsForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
}


export default StatsForm;
