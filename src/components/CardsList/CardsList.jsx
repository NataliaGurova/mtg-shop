// import filteredCards from "../../../src/data/output.json"
import { useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import css from "./CardsList.module.css"


const CardsList = ({ cards, onClick, isLoading }) => {

  //  const cardsClear = cards.filter(card => card.name.include("A-"))
  
  return (
    <div>
    <ul className={css.listCards}>
      {cards.map((card) => (
        <li key={card.id} >
          <CardItem card={card} />
        </li>
      ))}
    </ul>
      {cards.length > 0 && !isLoading && (
        <button onClick={onClick} className={css.btn}>Load more</button>
      )}
      </div>
  );
};

export default CardsList;
