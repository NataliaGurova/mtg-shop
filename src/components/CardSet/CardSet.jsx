import { useEffect, useState } from "react";
import css from "./CardSet.module.css"
import sets from "../../../public/sets/sets.json"
import { getSetSymbol } from "../../api";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

 
const CardSet = () => {

  // Стан для відкриття/закриття списку 
  const [isVisible, setIsVisible] = useState(false);
  // const [symbolUrl, setSymbolUrl] = useState(null);

const handleToggle = () => {
    setIsVisible(!isVisible)
  }
// ===========Тест=================================
// Тестовий приклад — завантажити символ конкретного сета
    
  // useEffect(() => {
  //   getSetSymbol("2ed").then(url => {
  //     setSymbolUrl(url);
  //   });
  // }, []);
  
  // ===================

  return (
    <div className={css.container}>
        {/* <h3 className={css.title}>Sets</h3>       
      <select name="all-editions"> */}

        <button
        className={css.titleBtn}
        type="button"
        onClick={handleToggle} // Додаємо функцію для перемикання стану
      >
        <b className={css.title}>Sets</b>
        {isVisible ? <FaChevronUp /> : <FaChevronDown />}
      </button>

         {/* Показ символу сета "lea", якщо він вже завантажений
      {symbolUrl && (
        <img className={css.imgSymbol} src={symbolUrl} alt="set symbol" width="25" />
      )} */}
      
      {isVisible && (
        <ul className={css.listContainer}>
          {sets.map((set) => (
            <li className={css.itemContainer} key={set.code}>
              <label className={css.itemLabel}>
                <input
                  className={css.itemCheckbox}
                  type="checkbox"
                  name="set"
                  value={set.code}
                />
                {set.set_name}
                <img className={css.imgSymbol} src={set.symbol} alt="" />
              </label>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default CardSet;

// // "Commander 2020"
//     "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ac20&unique=prints",