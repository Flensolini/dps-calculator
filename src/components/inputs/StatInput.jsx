import React from "react";
import PropTypes from 'prop-types';
import "./stat-input.scss";

const StatInput = (props) => {
  const { label, max, value, onChange } = props;

  function handleChange(event) {

    onChange(event.target.value);
}
  return (
    <div className="wrapper">
      <label className="label">{label}</label>
      <input min="0" type="number" max={max} className="input" onChange={handleChange} value={value}/>
    </div>
  );
};

StatInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  max: PropTypes.number
}

export default StatInput;
