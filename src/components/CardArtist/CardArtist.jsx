
import { GiCheckMark } from "react-icons/gi";
import css from "./CardArtist.module.css"

// import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const CardArtist = ({cards}) => {

  const artists = ["Daren Bader", "Ron Spears", "Mark Zug", "Kev Walker", "Luca Zontini", "Greg Staples", "Darrell Riche", "Matt Cavotta", "Carl Critchlow", "Shishizaru", "Donato Giancola"];
  
 // Стан для відкриття/закриття списку
const [isVisible, setIsVisible] = useState(false); 

const handleToggle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className={css.container}>

      <button
        className={css.titleBtn}
        type="button"
        onClick={handleToggle} // Додаємо функцію для перемикання стану
      >
        <b className={css.title}>Artists</b>
        {isVisible ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Відображаємо або приховуємо список залежно від стану */}
      {isVisible && (
      <ul className={css.listContainer}>
        {artists.map((artist) => (
        <li key={artist} className={css.itemContainer}>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="artists" value={artist} aria-label="Check Artist" />
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