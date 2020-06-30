import React from "react";
import PropTypes from 'prop-types';
import "./text-field.scss";

const TextField = (props) => {
  const { value, label } = props;
  return (
      <div className="field">
          <div className="field-label">{label} = </div>
          <div className="field-value">{value} Spell Power</div>
      </div>
  );
};

TextField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
}

export default TextField;
