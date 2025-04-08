
import { useEffect, useState } from "react";
import CardArtist from "../CardArtist/CardArtist";
import CardColor from "../CardColor/CardColor";
import CardSet from "../CardSet/CardSet";
import CardRarity from "../CardRarity/CardRarity";
import CardType from "../CardType/CardType";
import css from "./Filters.module.css"

import { GiSparklingSabre } from "react-icons/gi";
import { GiCardPlay } from "react-icons/gi";

import { GiSplash } from "react-icons/gi";
import FoilNotFoil from "../FoilNotFoil/FoilNotFoil";




const Filters = ({ onChange, textValue, isFoil, onChangeFoil }) => {

  // Знаходимо по назві
  const handleNameChange = (event) => {
    onChange(event.target.value);
  };

  
 useEffect(() => {
    console.log("Фільтрований текст:", textValue);
  }, [textValue]);

// --------------------------
  
  return (
    <div className={css.container}>
      <h1>Filters</h1>
      <div className={css.formContainer}>

        <FoilNotFoil isFoil={isFoil} onChangeFoil={onChangeFoil} />

      <h3 className={css.title}>Card Name</h3>
        <input
          type="text"
          value={textValue}
          onChange={handleNameChange}
          placeholder="name"
          className={css.inputName}
      />
      
        <CardSet/>
        <CardType/>

        <CardColor />
        <CardRarity  />
        <CardArtist  />

        {/* <button type="submit">Search</button> */}
      </div>
    </div>  
  );
};

export default Filters;



// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }