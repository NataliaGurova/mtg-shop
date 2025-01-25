import { GiCheckMark } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa6";
import css from "./CardColor.module.css"

import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

import { FaCheck } from "react-icons/fa6";
import { useState } from "react";


const CardColor = () => {

  const [isOpen, setIsOpen] = useState(true); // Стан для відкриття/закриття списку

  const toggleList = () => {
    setIsOpen((prevState) => !prevState);
  };


  return (
    <div className={css.container}>

      {/* <h3 className={css.title}>Card Color</h3> */}
      <button
        className={css.titleBtn}
        type="button"
        onClick={toggleList} // Додаємо функцію для перемикання стану
      >
        <b className={css.title}>Card Color</b>
        {isOpen ? <FaChevronUp /> : <FaAngleDown />}
      </button>

      {/* Відображаємо або приховуємо список залежно від стану */}
      {isOpen && (
        <div className={css.checkboxColor}>
          <label className={css.labelColor}>
            <input type="checkbox" name="W" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <GiCheckMark className={css.checkIcon} />
            </div>
            <img className={css.imgColor} src="/photo/white.png" title="White" alt="W" width="25" height="25" />
          </label>
          <label className={css.labelColor}>
            <input type="checkbox" name="U" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <GiCheckMark className={css.checkIcon} />
            </div>
            <img className={css.imgColor} src="/photo/blue.png" title="Blue" alt="U" width="25" height="25" />
          </label>
          <label className={css.labelColor}>
            <input type="checkbox" name="B" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <GiCheckMark className={css.checkIcon} />
            </div>
            <img className={css.imgColor} src="/photo/black.png" title="Black" alt="B" width="25" height="25" />
          </label>
          <label className={css.labelColor}>
            <input type="checkbox" name="R" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <GiCheckMark className={css.checkIcon} />
            </div>
            <img className={css.imgColor} src="/photo/red.png" title="Red" alt="R" width="25" height="25" />
          </label>
          <label className={css.labelColor}>
            <input type="checkbox" name="G" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <GiCheckMark className={css.checkIcon} />
            </div>
            <img className={css.imgColor} src="/photo/green.png" title="Green" alt="G" width="25" height="25" />
          </label>
          <label className={css.labelColor}>
            <input type="checkbox" name="colorless" className={css.checkbox} />
            <div className={css.customCheckbox}>
              <GiCheckMark className={css.checkIcon} title="Colorless"/>
            </div>
            <FaRegCircle className={css.imgColor} size={25} />
          </label>
        </div>
      )}
    </div>
  )
}

export default CardColor;

// =============================

// import { FaRegCircle, FaCheck } from "react-icons/fa6";
// import css from "./CardColor.module.css";

// const CardColor = () => {
//   const colors = [
//     { id: "W", name: "White", icon: "/white.png" },
//     { id: "U", name: "Blue", icon: "/blue.png" },
//     { id: "B", name: "Black", icon: "/black.png" },
//     { id: "R", name: "Red", icon: "/red.png" },
//     { id: "G", name: "Green", icon: "/green.png" },
//     { id: "M", name: "None", icon: <FaRegCircle size={25} /> },
//   ];

//   return (
//     <div className={css.container}>
//       <div className={css.filterColor}>
//         <h3 className={css.title}>Card Color</h3>
//       </div>
//       <div className={css.checkboxColor}>
//         {colors.map((color) => (
//           <label key={color.id} className={css.labelColor}>
//             <input
//               type="checkbox"
//               name={color.id}
//               className={css.checkbox}
//             />
//             <div className={css.customCheckbox}>
//               <GiCheckMark  className={css.checkIcon} />
//             </div>
//             {typeof color.icon === "string" ? (
//               <img
//                 src={color.icon}
//                 title={color.name}
//                 alt={color.name}
//                 width="25"
//                 height="25"
//               />
//             ) : (
//               color.icon
//             )}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardColor;



// =================================





{/* <FaCheck /> */}

{/* <button className={css.btn}><FaAngleDown /></button> */}






// import { useState } from "react";
// import { FaRegCircle, FaAngleDown } from "react-icons/fa6";
// import css from "./CardColor.module.css";

// const CardColor = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Відкриття/закриття меню
//   const [selectedColors, setSelectedColors] = useState([]); // Вибрані кольори

//   const colors = [
//     { id: 1, name: "White", icon: "/white.png" },
//     { id: 2, name: "Blue", icon: "/blue.png" },
//     { id: 3, name: "Black", icon: "/black.png" },
//     { id: 4, name: "Red", icon: "/red.png" },
//     { id: 5, name: "Green", icon: "/green.png" },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const toggleColorSelection = (colorId) => {
//     if (selectedColors.includes(colorId)) {
//       setSelectedColors(selectedColors.filter((id) => id !== colorId)); // Видаляємо вибраний колір
//     } else {
//       setSelectedColors([...selectedColors, colorId]); // Додаємо вибраний колір
//     }
//   };

//   const handleMenuClick = (e) => {
//     e.stopPropagation(); // Запобігаємо закриттю меню під час кліку всередині
//   };

//   const handleCloseMenu = () => {
//     setIsMenuOpen(false); // Закриваємо меню, якщо клік поза ним
//   };

//   return (
//     <div onClick={handleCloseMenu}>
//       <div className={css.filterColor} onClick={(e) => e.stopPropagation()}>
//         <h3 className={css.title}>
//           Card Color {selectedColors.length > 0 && `(${selectedColors.length})`}
//         </h3>
//         <button
//           className={`${css.btn} ${isMenuOpen ? css.rotate : ""}`}
//           onClick={toggleMenu}
//         >
//           <FaAngleDown />
//         </button>
//       </div>
//       {isMenuOpen && (
//         <ul className={css.colorMenu} onClick={handleMenuClick} >
//           {colors.map((color) => (
//             <li
//               key={color.id}
//               className={`${css.labelColor} ${
//                 selectedColors.includes(color.id) ? css.selected : ""
//               }`}
//               onClick={() => toggleColorSelection(color.id)}
//             >
//               <img
//                 src={color.icon}
//                 alt={color.name}
//                 width="25"
//                 height="25"
//               />
//               <p>{color.name}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CardColor;
