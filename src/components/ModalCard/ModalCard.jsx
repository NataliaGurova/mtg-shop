import { BsBasket } from "react-icons/bs";
import css from "./ModalCard.module.css"
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { useState } from "react";

import clsx from 'clsx';

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const ModalCard = ({ card, hasCardFaces }) => {

  console.log("cardFront:", card);
  
  //   const imageUrlBig = hasCardFaces
  // ? isFront
  // ? card.card_faces[0].image_uris?.large
  // : card.card_faces[1].image_uris?.large
  // : card.image_uris?.large || "https://via.placeholder.com/310x396"; 
  

  const [isFlipped, setIsFlipped] = useState(false);
  

   const legalityClasses = {
    legal: "legal",
    not_legal: "notLegal",
    restricted: "restricted",
    banned: "banned",
    // ahead: "ahead",
    // future: "future",
    // historic: "historic",
    // mythic: "mythic",
  };

  const formatsToShow = [
    "alchemy",
    "explorer",
    "historic",
    "brawl",
    "timeless",
    "pauper",
    "penny",
    "standard",
    "pioneer",
    "modern",
    "legacy",
    "vintage",
    "commander",
    "oathbreaker",
  ];


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
            <h3 className={css.set}> {card.set_name}</h3>
      <p><b>Artist:</b> {card.artist}</p>

      <div>
      <b>Legalities:</b>
      <ul className={css.format}>
        {formatsToShow.map((format) => {
          const status = card.legalities?.[format]; // Отримуємо статус формату
          if (!status) return null; // Якщо формату немає, не виводимо

          return (
            <li key={format} className={css[legalityClasses[status] || "default"]} title={legalityClasses[status]}>
              {format.charAt(0).toUpperCase() + format.slice(1)}
            </li>
          );
        })}
      </ul>
    </div>
            <div className={css.price}>
              <p><b>Price:</b> ${card.prices.usd}</p>
              <button type="button" className={css.btnCart}><BsBasket /> Add to Cart</button>
            </div>
          </div>
        </div>
  )
}

export default ModalCard;

legalities
: 
alchemy
: 
"legal"
brawl
: 
"legal"
commander
: 
"legal"
duel
: 
"legal"
explorer
: 
"legal"
future
: 
"legal"
gladiator
: 
"legal"
historic
: 
"legal"
legacy
: 
"legal"
modern
: 
"legal"
oathbreaker
: 
"legal"
oldschool
: 
"not_legal"
pauper
: 
"not_legal"
paupercommander
: 
"not_legal"
penny
: 
"legal"
pioneer
: 
"legal"
predh
: 
"not_legal"
premodern
: 
"not_legal"
standard
: 
"legal"
standardbrawl
: 
"legal"
timeless
: 
"legal"
vintage
: 
"legal"
