
// import React from "react";
import css from "./Loader.module.css";

const Loader = () => {
  
  return (
    <div className={css.loaderContainer}>
      <div className={`${css.circle} ${css.white}`}></div>
      <div className={`${css.circle} ${css.green}`}></div>
      <div className={`${css.circle} ${css.blue}`}></div>
      <div className={`${css.circle} ${css.red}`}></div>
      <div className={`${css.circle} ${css.black}`}>
        <img className={css.imgColor} src="/photo/black.png" title="Black" alt="B" />
      </div>
    </div>
  );
};

export default Loader;




// import { ThreeDots } from 'react-loader-spinner';
// import css from './Loader.module.css';

// const Loader = () => {
//   return (
//     <div className={css.loaderContainer}>
//       <ThreeDots
//         visible={true}
//         height="80"
//         width="80"
//         color="#2b4170"
//         radius="9"
//         ariaLabel="three-dots-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//       />
//     </div>
//   );
// };

// export default Loader;