
import { GiCheckMark } from "react-icons/gi";
import css from "./CardArtist.module.css"

import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const CardArtist = ({cards}) => {

  const [isOpen, setIsOpen] = useState(true); // Стан для відкриття/закриття списку
  
  const artists = ["Daren Bader", "Ron Spears", "Mark Zug", "Kev Walker", "Luca Zontini", "Greg Staples", "Darrell Riche", "Matt Cavotta", "Carl Critchlow", "Shishizaru", "Donato Giancola"];


  const toggleList = () => {
    setIsOpen((prevState) => !prevState);
  };


  return (
    <div className={css.container}>

      <button
        className={css.titleBtn}
        type="button"
        onClick={toggleList} // Додаємо функцію для перемикання стану
      >
        <b className={css.title}>Artists</b>
        {isOpen ? <FaChevronUp /> : <FaAngleDown />}
      </button>

      {/* Відображаємо або приховуємо список залежно від стану */}
      {isOpen && (
      <ul className={css.listContainer}>
        {artists.map((artist) => (
        <li key={artist} className={css.itemContainer}>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="artists" value={artist} aria-label="Check Rare" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>{artist}</span>
          </label>
        </li>
        ))}
          
        
        </ul>
        )}
    </div>
  );
};
export default CardArtist;