import React from "react";
import PropTypes from 'prop-types';
import "./checkbox.scss";

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;

  function handleChange(event) {

    onChange(event);
}
  return (
    <label className="checkbox-wrapper">{label}
        <input name={name} type="checkbox" onChange={handleChange} value={value}/>
        <span className="checkmark"></span>
    </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
}

export default Checkbox;