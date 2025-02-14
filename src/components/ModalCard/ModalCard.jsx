import { BsBasket } from "react-icons/bs";
import css from "./ModalCard.module.css"
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { useState } from "react";


const ModalCard = ({ card, hasCardFaces }) => {

  console.log("cardFront:", card);
  
  //   const imageUrlBig = hasCardFaces
  // ? isFront
  // ? card.card_faces[0].image_uris?.large
  // : card.card_faces[1].image_uris?.large
  // : card.image_uris?.large || "https://via.placeholder.com/310x396"; 
  

const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleCard = () => {
    if (hasCardFaces) {
      setIsFlipped((prev) => !prev);
    }
  };
return (
  <div className={css.modalContent}>
    <div className={`${css.cardInner} ${isFlipped ? css.flipped : ""}`}>
      {/* Передня сторона */}
      <div className={css.cardFace}>
        <img src={card.image_uris?.large || card.card_faces[0].image_uris?.large} alt={card.name} className={css.imgCard} />
      </div>
      
        {/* Задня сторона */}
        {hasCardFaces && (
          <div className={`${css.cardFace} ${css.cardBack}`}>
            <img src={card.card_faces[1].image_uris?.large} alt={`${card.name} - back`} className={css.imgCard} />
          </div>
        )}
    
      {/* Кнопка перевороту, якщо є дві сторони у картки */}
      {hasCardFaces && (
        <button className={css.flipBtn} onClick={handleToggleCard}>
          <MdOutlineFlipCameraAndroid className={css.flip} />
        </button>
      )}
    </div>
          <div className={css.cardDetails}>
            <h2>{card.name}</h2>
            <p><b>Set:</b> {card.set_name}</p>
            <p><b>Mana Cost:</b> {card.mana_cost || "N/A"}</p>
            <p><b>Type:</b> {card.type_line}</p>
            <div className={css.price}>
              <p><b>Price:</b> ${card.prices.usd}</p>
              <button type="button" className={css.btnCart}><BsBasket /> Add to Cart</button>
            </div>
          </div>
        </div>
  )
}

export default ModalCard;
