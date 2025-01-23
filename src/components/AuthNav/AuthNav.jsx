import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CgLogIn } from 'react-icons/cg';
import { LuUser } from "react-icons/lu";

import { FaRegUser } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";

import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AuthNav = () => {
  return (
    <div className={css.container}>
      {/* <CgLogIn /> */}
      <div>
      <NavLink className={buildLinkClass} to="/login">
      <FaRegUser className={css.navIcon}/>
        Login
      </NavLink>
      <span>/</span>
      <NavLink className={buildLinkClass} to="/register">
        Register
        </NavLink>
        </div>
      <div>
      <NavLink className={buildLinkClass} to="/cart">
      <BsBasket className={css.navIcon}/>
        Cart
        </NavLink>
        </div>
    </div>
  );
};
