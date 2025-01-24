
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';


// import { CgLogIn } from "react-icons/cg";
// import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  // const isLoggedIn = "false";
  const isLoggedIn = useSelector(selectIsLoggedIn);
// console.log(useSelector(selectIsLoggedIn));

  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink to="/" className={css.logo}>
          {/* <img src="" alt="Logo" width="28" height="28" /> */}
          LOGO
        </NavLink>
        <Search/>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <Navigation />
    </header>
  );
};

export default AppBar;
