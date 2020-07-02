import React from "react";
import PropTypes from 'prop-types';
import "./buffs.scss";
import Checkbox from "../checkbox/Checkbox";

const Buffs = (props) => {
  const { handleChange, values } = props;
  return (
    <div className="buffs">
        <div className="buff-category">
            <h2>World Buffs</h2>
            <Checkbox name="ony" value={values.ony} onChange={handleChange} label="Onyxia Buff"/>
            <Checkbox name="zandalar" value={values.zandalar} onChange={handleChange} label="Spirit of Zandalar"/>
            <Checkbox name="dmt" value={values.dmt} onChange={handleChange} label="Dire Maul Tribute (3% crit)"/>
            <Checkbox name="dmf" value={values.dmf} onChange={handleChange} label="Darkmoon Faire (10% Damage)"/>
            <Checkbox name="songflower" value={values.songflower} onChange={handleChange} label="Songflower Serenade"/>
        </div>
        <div className="buff-category">
            <h2>Flasks and Elixirs</h2>
            <Checkbox name="gae" value={values.gae} onChange={handleChange} label="Greater Arcane Elixir"/>
            <Checkbox name="efp" value={values.efp} onChange={handleChange} label="Elixir of Frost Power"/>
            <Checkbox name="flaskSP" value={values.flaskSP} onChange={handleChange} label="Flask of Supreme Power"/>
        </div>
        <div className="buff-category">
            <h2>Class Buffs</h2>
            <Checkbox name="wc" value={values.wc} onChange={handleChange} label="Winter's Chill"/>
            <Checkbox name="ai" value={values.ai} onChange={handleChange} label="Arcane Intellect"/>
            <Checkbox name="BOK" value={values.BOK} onChange={handleChange} label="Blessing of Kings"/>
            <Checkbox name="motw" value={values.motw} onChange={handleChange} label="Mark of the Wild"/>
        </div>
    </div>
  );
};

Buffs.propTypes = {
    values: PropTypes.object,
    handleChange: PropTypes.func,
}

export default Buffs;