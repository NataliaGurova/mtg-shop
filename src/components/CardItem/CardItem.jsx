
import { BsBasket } from "react-icons/bs";
import css from "./CardItem.module.css"
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import ModalCard from "../ModalCard/ModalCard";
// import ModalCard from "../ModalCard/ModalCard";

// import { useEffect } from "react";

const CardItem = ({ card }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const hasCardFaces = Array.isArray(card.card_faces) && card.card_faces.length > 1;
  
  // Отримуємо URL зображення
  const imageUrl = card.image_uris
    ? card.image_uris?.normal || `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(card.name)}`
    : card.card_faces[0].image_uris?.normal; // Передня сторона
    

  return (
 <>
      {/* Основна картка */}
      <div className={css.itemCard} onClick={openModal}>
        <img src={imageUrl} alt={card.name} width="210" height="296" className={css.imgCard} />
        <b className={css.text}>{card.name}</b>
        <div className={css.cart}>
          <p>${card.prices.usd}</p>
          <button type="button" className={css.btnCart}><BsBasket /></button>
        </div>
      </div>

      {/* Модальне вікно */}
      <ModalWindow modalIsOpen={isModalOpen} onCloseModal={closeModal}>
        <ModalCard card={card} hasCardFaces={hasCardFaces} />
      </ModalWindow>
    </>
  );
};

export default CardItem;

{/* <ModalCard
  isModalOpen={isModalOpen}
  onCloseModal={closeModal}
  card={card}
/> */}




{/* <img src={`https://cards.scryfall.io/large/front/6/7/${card.id}.jpg`}  alt={card.name} width="210" height="296" className={css.imgCard} /> */ }

// https://cards.scryfall.io/large/front/b/4/b443504e-1b25-4565-bad7-2575826c7bb9.jpg?1682292303
// https://cards.scryfall.io/large/front/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1665157358  це краще

// https://cards.scryfall.io/large/front/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982
// https://cards.scryfall.io/large/back/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982
// https://api.scryfall.com/cards/41b0eddd-9364-4ca1-ac81-0175dd1387e8





// https://cards.scryfall.io/normal/front/0/c/0c780e37-91b1-4fe1-85c9-7007d91209d5.jpg?1681158251

// https://cards.scryfall.io/large/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.jpg?1663738897
// https://cards.scryfall.io/normal/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.jpg?1663738897