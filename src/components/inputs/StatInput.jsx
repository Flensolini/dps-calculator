import React from "react";
import PropTypes from 'prop-types';
import "./stat-input.scss";

const StatInput = (props) => {
  const { name, label, max, value, onChange } = props;

  function handleChange(event) {

    onChange(event);
}
  return (
    <div className="wrapper">
      <label className="label">{label}</label>
      <input name={name} min="0" type="number" max={max} className="input" onChange={handleChange} value={value}/>
    </div>
  );
};

StatInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  max: PropTypes.number
}

export default StatInput;
