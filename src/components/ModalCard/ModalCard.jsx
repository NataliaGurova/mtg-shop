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
    <div className={`${css.cardFace} ${card.foil ? css.foilEffect : ""}`}>
      <img
        src={card.image_uris?.large || card.card_faces[0].image_uris?.large}
        alt={card.name}
        className={css.imgCard}
      />
    </div>

    {/* Задня сторона */}
    {hasCardFaces && (
      <div className={`${css.cardFace} ${css.cardBack} ${card.foil ? css.foilEffect : ""}`}>
        <img
          src={card.card_faces[1].image_uris?.large}
          alt={`${card.name} - back`}
          className={css.imgCard}
        />
      </div>
    )}

    {hasCardFaces && (
      <button className={css.flipBtn} onClick={handleToggleCard}>
        <MdOutlineFlipCameraAndroid className={css.flip} />
      </button>
    )}
  </div>

  {/* Інша інформація */}
    <div className={css.cardDetails}>
      <div className={css.nameCard}>
        <h2>{card.name}
          
        </h2>
        <span title="English">{card.lang}</span>
        {card.foil && (
          <span className={css.foilBadge} title="Foil">✨</span>
          )}
      </div>
    <h3 className={css.set}> {card.set_name}</h3>
    <p><b>Artist:</b> {card.artist}</p>

    <div>
      <b>Legalities:</b>
      <ul className={css.format}>
        {formatsToShow.map((format) => {
          const status = card.legalities?.[format];
          if (!status) return null;
          return (
            <li
              key={format}
              className={css[legalityClasses[status] || "default"]}
              title={legalityClasses[status]}
            >
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
