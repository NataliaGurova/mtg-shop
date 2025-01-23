
import { BsBasket } from "react-icons/bs";
import css from "./CardItem.module.css"

const CardItem = ({ card }) => {
  return (
    <div>
      <img src={card.picture} alt={card.name} width="210" height="296" className={css.imgCard} />
      <b className={css.text}>{card.name}</b>
      <div className={css.cart}>
        <p>${card.price}</p>
        <button type="submit" className={css.btnCart}><BsBasket/></button>
      </div>
    </div>
  )
}

export default CardItem; 