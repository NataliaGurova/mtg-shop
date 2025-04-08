
import { useState } from "react";
import css from "./FoilNotFoil.module.css"
const FoilNotFoil = ({ isFoil, onChangeFoil}) => {
  

  // Фільтруєм foil notFoil
  
  const handleFoilChange = (event) => {
    onChangeFoil(event.target.value);
  }


  return (
            <div className={css.toggleFoil}>
  {/* Not Foils */}
  <label className={`${css.label} ${css.notFoilss}`}>
            <input className={css.input}
              name="print"
              value="false"
              onChange={handleFoilChange} 
              checked={isFoil === "false"} 
              type="radio"/>
    <span className={`${css.text} ${css.notFoils}`}>Regular</span>
  </label>

  {/* Foils */}
  <label className={`${css.label} ${css.foilss}`}>
            <input className={css.input}
              name="print"
              value="true"
              onChange={handleFoilChange}
              checked={isFoil === "true"} 
              type="radio"/>
    <span className={`${css.text} ${css.foils}`}>Foils</span>
  </label>
</div>
  )
};

export default FoilNotFoil;
