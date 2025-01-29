import { useForm } from "react-hook-form";
import { GiCheckMark } from "react-icons/gi";
import css from "./CardRarity.module.css"

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useId, useState } from 'react';

// import { LuMonitorCheck } from "react-icons/lu";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";



const schemaYup = Yup.object().shape({
  location: Yup.string(),
  equipment: Yup.array()
    .of(
      Yup.string().oneOf([
        'airConditioner',
        'automatic',
        'kitchen',
        'TV',
        'shower',
        'freezer',
        'microwave',
      ])
    )
    .nullable(),
  type: Yup.string().oneOf(['van', 'fullyIntegrated', 'alcove', '']),
});

const CardRarity = ({cards}) => {

//   const idLocation = useId();


//  const defaultValues = {
//     location: '',
//     equipment: [],
//     type: '',
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: defaultValues,
//     resolver: yupResolver(schemaYup),
//   });

//   const onSubmit = data => {
//     console.log(data);

//     dispath(changeFilters(data));
//   };
  
  

  
  
  
  //  const [selectedRarities, setSelectedRarities] = useState([]);
  // const rarities = ["Rare", "Uncommon", "Common", "Mythic", "Basic Land"]; // Список рідкостей

  // // Обробка вибору рідкостей
  // const handleRarityChange = (event) => {
  //   const value = event.target.value;

  //   if (selectedRarities.includes(value)) {
  //     // Видаляємо зі списку, якщо вже вибрано
  //     setSelectedRarities((prev) => prev.filter((rarity) => rarity !== value));
  //   } else {
  //     // Додаємо до списку
  //     setSelectedRarities((prev) => [...prev, value]);
  //   }
  // };

  // // Фільтрація карт
  // const filteredCards = cards.filter((card) =>
  //   selectedRarities.length > 0 ? selectedRarities.includes(card.rarity) : true
  // );


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
        <b className={css.title}>Rarity</b>
        {isVisible ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Відображаємо або приховуємо список залежно від стану */}
      {isVisible && (
      <ul className={css.listContainer}>
        
        <li className={css.itemContainer}>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="rarity" value="R" aria-label="Check Rare" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Rare</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="rarity" value="U" aria-label="Check Uncommon" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Uncommon</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="rarity" value="C" aria-label="Check Common" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Common</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="rarity" value="M" aria-label="Check Mythic" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Mythic</span>
          </label>
        </li>
        
        <li>
          <label className={css.itemLabel}>
            <input className={css.itemCheckbox} type="checkbox" name="rarity" value="L" aria-label="Check Basic Land" />
            <div className={css.customCheckbox}>
              <GiCheckMark  className={css.checkIcon} />
              </div>
          <span className={css.customSpan}>Basic Land</span>
          </label>
        </li>
        
        </ul>
        )}
    </div>
  );
};
export default CardRarity;




// ============================================================

  // return (

  //     <div>
  //     <h3>Filter by Rarity</h3>
  //     <div>
  //       {/* Список рідкостей */}
  //       {rarities.map((rarity) => (
  //         <label key={rarity} style={{ marginRight: "10px" }}>
  //           <input
  //             type="checkbox"
  //             value={rarity}
  //             onChange={handleRarityChange}
  //           />
  //           {rarity}
  //         </label>
  //       ))}
  //     </div>

  //     <h4>Filtered Cards</h4>
  //     <div>
  //       {/* Вивід відфільтрованих карт */}
  //       {filteredCards.map((card) => (
  //         <div key={card.id} style={{ marginBottom: "10px" }}>
  //           <strong>{card.name}</strong> ({card.rarity})
  //         </div>
  //       ))}
  //     </div>
  //   </div>
// =========================================================================

    // <div className={css.container}>

    //       <h3 className={css.titleList}>Rarity</h3>

    //       <ul className={css.listContainer}>

    //         <li className={css.itemContainer}>
    //           <label className={css.itemLabel}>
    //             <input
    //               className={css.itemCheckbox}
    //               type="checkbox"
    //               value="M"
    //             onSubmit={handleSubmit(onSubmit)}
    //               {...register('mythic')}
    //             />
    //             <div className={css.customCheckbox}>
    //           <GiCheckMark  className={css.checkIcon} />
    //           </div>
    //             Mythic
    //           </label>
    //         </li>

    //         <li className={css.itemContainer}>
    //           <label className={css.itemLabel}>
    //             <input
    //               className={css.itemCheckbox}
    //               type="checkbox"
    //               value="R"
    //             onSubmit={handleSubmit(onSubmit)}
    //               {...register('rarity')}
    //             />
    //             <LuMonitorCheck id="automatic" width="32" height="32" />
    //             Automatic
    //           </label>
    //         </li>

    //         <li className={css.itemContainer}>
    //           <label className={css.itemLabel}>
    //             <input
    //               className={css.itemCheckbox}
    //               type="checkbox"
    //               value="kitchen"
    //             onSubmit={handleSubmit(onSubmit)}
    //               {...register('equipment')}
    //             />
    //             <LuMonitorCheck id="kitchen" width="32" height="32" />
    //             Kitchen
    //           </label>
    //         </li>
    //         <li className={css.itemContainer}>
    //           <label className={css.itemLabel}>
    //             <input
    //               className={css.itemCheckbox}
    //               type="checkbox"
    //               value="TV"
    //               {...register('equipment')}
    //             />
    //             <LuMonitorCheck id="TV" width="32" height="32" />
    //             TV
    //           </label>
    //         </li>
    //         <li className={css.itemContainer}>
    //           <label className={css.itemLabel}>
    //             <input
    //               className={css.itemCheckbox}
    //               type="checkbox"
    //               value="shower"
    //               {...register('equipment')}
    //             />
    //             <LuMonitorCheck id="shower" width="32" height="32" />
    //             Shower/WC
    //           </label>
    //         </li>
    //         <li className={css.itemContainer}>
    //           <label className={css.itemLabel}>
    //             <input
    //               className={css.itemCheckbox}
    //               type="checkbox"
    //               value="freezer"
    //               {...register('equipment')}
    //             />
    //             <LuMonitorCheck id="freezer" width="32" height="32" />
    //             Freezer
    //           </label>
    //         </li>
    //         <li className={css.itemContainer}>
    //           <label className={css.itemLabel}>
    //             <input
    //               className={css.itemCheckbox}
    //               type="checkbox"
    //               value="microwave"
    //               {...register('equipment')}
    //             />
    //             <LuMonitorCheck id="microwave" width="32" height="32" />
    //             Microwave
    //           </label>
    //         </li>
    //       </ul>
    //     {/* </div> */}

    //   <button className={css.btnSubmit} type="submit">
    //     Search
    //   </button>
    // </div>




//   );
// };
// export default CardRarity;