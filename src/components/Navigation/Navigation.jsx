/* import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

export default function Navigation({ isLoggedIn }) {
  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  return (
    <div className={css.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={activeLink} to="/contacts">
          Contacts
        </NavLink>
      )}
      {!isLoggedIn && (
        <>
          <NavLink className={activeLink} to="/register">
            Register
          </NavLink>
          <NavLink className={activeLink} to="/login">
            Log In
          </NavLink>
        </>
      )}
    </div>
  );
} */
