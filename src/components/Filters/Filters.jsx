import CardArtist from "../CardArtist/CardArtist";
import CardColor from "../CardColor/CardColor";
import CardEdition from "../CardEdition/CardEdition";
import CardRarity from "../CardRarity/CardRarity";
import CardType from "../CardType/CardType";
// import ModalDropdown from "../ModalDropdown/ModalDropdown";
// import ModalSelect from "../ModalSelect/ModalSelect";
import css from "./Filters.module.css"

import { GiSparklingSabre } from "react-icons/gi";
import { GiCardPlay } from "react-icons/gi";

import { GiSplash } from "react-icons/gi";




const Filters = ({onChange, searchCard}) => {


  // Фільтруєм foil notFoil

  //  const [searchCard, setSearchCard] = useState(""); 
  // const [filteredCards, setFilteredCards] = useState(cards);


  // const handleSearchChange = (e) => {
  //   const newCard = e.target.value;
  //   setSearchCard(newCard);

  //   const filtered = cards.filter(card =>
  //     card.name.toLowerCase().includes(newCard.toLowerCase())
  //   );
  //   setFilteredCards(filtered);
  //   console.log(filteredCards);
    
  // };
// --------------------------
  
  return (
    <div className={css.container}>
      <h1>Filters</h1>
      <div className={css.formContainer}>


        
        <div className={css.toggleFoil}>
  {/* Not Foils */}
  <label className={`${css.label} ${css.notFoilss}`}>
    <input className={css.input} type="radio" name="print" value="NF" />
    <span className={`${css.text} ${css.notFoils}`}>Regular</span>
  </label>

  {/* Foils */}
  <label className={`${css.label} ${css.foilss}`}>
    <input className={css.input} type="radio" name="print" value="F" />
    <span className={`${css.text} ${css.foils}`}>Foils</span>
  </label>
</div>




        <h3 className={css.title}>Card Name</h3>

        <input
          type="text"
          value={searchCard}
          onChange={onChange}
          placeholder="Name"
          className={css.inputName}
      />
      

        <CardEdition/>
        <CardType/>

        <CardColor />


        <CardRarity cards={searchCard} />
        <CardArtist cards={searchCard} />
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