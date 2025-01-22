import cards from "../../../src/data/output.json"
import css from "./CardsList.module.css"

import { BsBasket } from "react-icons/bs";

const CardsList = ({filteredCards}) => {

  return (
    <ul className={css.listCards}>
      {/* {cards.map((card) => { */}
      {filteredCards.map((card) => {
          return (
            <li key={card.id} className={css.itemCard}>
              <img src={card.picture} alt={card.name} width="210" height="296" className={css.imgCard} />
                <b className={css.text}>{card.name}</b>
              <div className={css.cart}>
                <p>${card.price}</p>
              <button type="submit" className={css.btnCart}><BsBasket/></button>
                </div>
              
            </li>
          );
        })}
        </ul>  
  );
};

export default CardsList;
