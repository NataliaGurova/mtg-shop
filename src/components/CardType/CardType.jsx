import { GiCheckMark } from "react-icons/gi";
import css from "./CardType.module.css"

import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const CardType = () => {

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
        <b className={css.title}>Type</b>
        {isVisible ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Відображаємо або приховуємо список залежно від стану */}
      {isVisible && (
      <ul className={css.listContainer}>
        
        <li className={css.itemContainer}>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Artifact" aria-label="Check Artifact" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Artifact</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Battle" aria-label="Check Battle" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Battle</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Creature" aria-label="Check Creature" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Creature</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Enchantment" aria-label="Check Enchantment" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Enchantment</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Instant" aria-label="Check Instant" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Instant</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Land" aria-label="Check Land" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Land</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Legendary" aria-label="Check Legendary" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Legendary</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Planeswalker" aria-label="Check Planeswalker" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Planeswalker</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Sorcery" aria-label="Check Sorcery" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Sorcery</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="type" value="Tribal" aria-label="Check Tribal" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Tribal</span>
          </label>
        </li>
        
        </ul>
        )}
      </div>
  )
}

export default CardType;