import { useState } from "react";
import css from "./CardEdition.module.css"

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

 
const CardEdition = () => {

  // Стан для відкриття/закриття списку === не підключен
const [isVisible, setIsVisible] = useState(false); 

const handleToggle = () => {
    setIsVisible(!isVisible)
  }
// ============================================
  return (
    <div className={css.container}>
        <h3 className={css.title}>Edition</h3>       
        <select name="all-editions">
          <option value>All Edition</option>
          <option value="3rdEdition">3rd Edition</option>
            <option value="4thEdition">4th Edition</option>
            <option value="5thEdition">5th Edition</option>
            <option value="6thEdition">6th Edition</option>
            <option value="7thEdition">7th Edition</option>
            <option value="8thEdition">8th Edition</option>
            <option value="9thEdition">9th Edition</option>
            <option value="10thEdition">10th Edition</option>
            <option value="2010-core-set">2010 Core Set</option>
            <option value="2011-core-set">2011 Core Set</option>
            <option value="2012-core-set">2012 Core Set</option>
            <option value="2013-core-set">2013 Core Set</option>
            <option value="2014-core-set">2014 Core Set</option>
            <option value="2015-core-set">2015 Core Set</option>
            <option value="adventures-in-the-forgotten-realms">Adventures In The Forgotten Realms</option>
            <option value="adventures-in-the-forgotten-realms-commander-decks">Adventures In The Forgotten Realms Commander Decks</option>
            <option value="adventures-in-the-forgotten-realms-commander-decks-variants">Adventures In The Forgotten Realms Commander Decks Variants</option>
            <option value="adventures-in-the-forgotten-realms-variants">Adventures In The Forgotten Realms Variants</option>
          <option value="alara-reborn">Alara Reborn</option>
          <option value="BOK">Betrayers of Kamigawa</option>
        </select>
    </div>
  )
}

export default CardEdition;