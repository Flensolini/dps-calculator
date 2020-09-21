import React from "react";
import PropTypes from 'prop-types';
import "./stats-weight.scss";
import TextField from "../field/TextField";

const StatsWeight = (props) => {

  const { handleOutputChange, values, buffs} = props;

  const { SP, crit, hit, int } = values;
  const { ony, zandalar, songflower, dmt, dmf, gae, efp, flaskSP, wc, ai, BOK, motw} = buffs;

  const coefficient = 0.814;
  const baseDamage = 457;

  const totalInt = (parseInt(int) + (ai ? 31 : 0) + (motw ? 12 : 0)) * (zandalar ? 1.15 : 1) * (BOK ? 1.1 : 1)
  const totalSpellDamage = parseInt(SP) + (gae ? 35 : 0) + (efp ? 15 : 0) + (flaskSP ? 150 : 0);
  const totalHit = 17-parseInt(hit)
  const totalCrit = parseInt(crit) + totalInt/59.5 + (ony ? 10 : 0) + (songflower ? 5 : 0) + (dmt ? 3 : 0) + (wc ? 10: 0);
  const totalDamage = (baseDamage + (coefficient * totalSpellDamage)) * (dmf ? 1.1 : 1);

  const actualHit = (100-(totalHit))/100;
  const actualCrit = totalCrit/100;

  const baseNumbers = () => {
    const numberOfCrits = 100 * actualCrit * actualHit;
    const numberOfNonCrits = 100 * (1-actualCrit) * actualHit;
    const numberOfHits = 100-(actualHit*100);
    return [ numberOfCrits, numberOfNonCrits, numberOfHits ]
  }

  const extraCritNumbers = () => {
    const newCrit = actualCrit + 0.01

    const numberOfCrits = 100 * (newCrit) * actualHit;
    const numberOfNonCrits = 100 * (1-newCrit) * actualHit;
    const numberOfHits = 100-(actualHit*100);
    return [ numberOfCrits, numberOfNonCrits, numberOfHits ]
  }

  const extraHitNumbers = () => {
    const newHit = actualHit + 0.01

    const numberOfCrits = 100 * actualCrit * newHit;
    const numberOfNonCrits = 100 * (1-actualCrit) * newHit;
    const numberOfHits = 100-(newHit*100);
    return [ numberOfCrits, numberOfNonCrits, numberOfHits ]
  }

  const baseSim = () => {
    const critDamage = baseNumbers()[0]* totalDamage * 2;
    const nonCritDamage = baseNumbers()[1] * totalDamage;
    handleOutputChange(nonCritDamage + critDamage)
    return critDamage + nonCritDamage;
    
  }

  const critSim = () => {
    const critDamage = extraCritNumbers()[0]* totalDamage * 2;
    const nonCritDamage = extraCritNumbers()[1] * totalDamage;
    return critDamage + nonCritDamage;
  }

  const hitSim = () => {
    const critDamage = extraHitNumbers()[0]* totalDamage * 2;
    const nonCritDamage = extraHitNumbers()[1] * totalDamage;
    return critDamage + nonCritDamage;
  }

  const spellSim = () => {
    const critDamage = baseNumbers()[0]* (totalDamage + 8.14) * 2;
    const nonCritDamage = baseNumbers()[1] * (totalDamage + 8.14);
    return critDamage + nonCritDamage;
    
  }


  const roundNumber = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  const critDiff = critSim() - baseSim()
  const hitDiff = hitSim() - baseSim()
  const spellDiff = spellSim() - baseSim()


  const critValue = roundNumber(critDiff/spellDiff * 10)
  const hitValue = roundNumber(hitDiff/spellDiff * 10)
  const intValue = roundNumber(critValue/59.5)


  
  return (
    <div className="weight">
        <TextField label="1% Crit" value={critValue}></TextField>
        <TextField label="1% Hit" value={hitValue}></TextField>
        <TextField label="1 Intellect" value={intValue}></TextField>
    </div>
  );
};

StatsWeight.propTypes = {
  handleOutputChange: PropTypes.func,
  values: PropTypes.object,
  buffs: PropTypes.object,
}


export default StatsWeight;
