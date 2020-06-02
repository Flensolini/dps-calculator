import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./stat-input.css";

const StatInput = () => {
  return (
    <div>
      <TextField
        id="sp-from-gear"
        color="secondary"
        label="Spellpower from gear"
      />
      <TextField
        id="sp-from-consum"
        variant="outlined"
        color="primary"
        label="Spellpower from Consumables"
      />
    </div>
  );
};

export default StatInput;
