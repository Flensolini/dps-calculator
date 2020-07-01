import React from "react";
import PropTypes from 'prop-types';
import "./stats-form.scss";
import StatInput from '../inputs/StatInput';

const StatsForm = (props) => {
  const { spValue, critValue, hitValue, intValue, spChange, critChange, hitChange, intChange} = props;
  return (
    <div className="form">
        <StatInput onChange={spChange} value={spValue} label="Spell Power" />
        <StatInput onChange={critChange} value={critValue} label="Crit" />
        <StatInput onChange={hitChange} value={hitValue} max={100} label="Hit"/>
        <StatInput onChange={intChange} value={intValue} max={100} label="Int"/>
    </div>
  );
};

StatsForm.propTypes = {
  spValue: PropTypes.string,
  critValue: PropTypes.string,
  hitValue: PropTypes.string,
  intValue: PropTypes.string,
  spChange: PropTypes.func,
  critChange: PropTypes.func,
  hitChange: PropTypes.func,
  intChange: PropTypes.func,
}


export default StatsForm;
