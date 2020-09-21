import React from "react";
import PropTypes from 'prop-types';
import "./dps.scss";

const DPS = (props) => {
  const { output } = props;
  const roundNumber = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  }
  return (
    <div className="dps">
        <h2>Calculated DPS</h2>
        <div>{roundNumber(output/250)}</div>
    </div>
  );
};

DPS.propTypes = {
    output: PropTypes.number,
}

export default DPS;