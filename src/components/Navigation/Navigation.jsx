
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
    <nav className={css.nav}>

      <NavLink className={buildLinkClass} to="/singles">
        MTG Singles
      </NavLink>
      <NavLink className={buildLinkClass} to="/sets">
        MTG Sets
      </NavLink>
      <NavLink className={buildLinkClass} to="/tokens">
        MTG Tokens
      </NavLink>
      <NavLink className={buildLinkClass} to="/sealed">
        MTG Sealed
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/cards">
          Cards
        </NavLink>
      )} */}
      </nav>
      </div>
  );
};

// править!!!!!!!!! tasks