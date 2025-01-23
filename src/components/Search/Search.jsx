
// import { useDispatch } from "react-redux";
// import { changeFilter } from "../../redux/filters/slice";
import css from "./Search.module.css"

import { BsSearch } from "react-icons/bs";

const Search = () => {
//   const dispatch = useDispatch();

// const handleInputChange = (e) => {
//   const newValue = e.target.value;  
//   dispatch(changeFilter(newValue));
//   };

  return (
    <form className={css.search}>
      {/* <form onSubmit={handleSubmit} className={css.wrapper}> */}
      
      {/* <label className={css.searchLabel}><BsSearch className={css.glass} /></label> */}
      <button type="submit"><BsSearch size="20px" className={css.glass}/></button>
      <input className={css.inputSearch} type="text" placeholder="search..."/>
    </form>
  );
};

export default Search;


// export const TaskEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     if (text !== '') {
//       dispatch(addTask(text));
//       form.reset();
//       return;
//     }
//     alert('Task cannot be empty. Enter some text!');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input name="text" className={css.input} />
//       <button type="submit" className={css.button}>
//         Add task
//       </button>
//     </form>
//   );
// };