import React from "react";
import PropTypes from 'prop-types';
import "./stat-input.scss";

const StatInput = (props) => {
  const { type, label, max } = props;
  return (
    <div className="wrapper">
      <label className="label">{label}</label>
      <input min="0" max={max} type={type} className="input"/>
    </div>
  );
};

StatInput.propTypes = {
  type: PropTypes.oneOf(['number', 'text']),
  label: PropTypes.string,
  max: PropTypes.number
}

export default StatInput;
