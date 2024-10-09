import { NavLink } from 'react-router-dom';
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

      <NavLink className={activeLink} to="/campers">
        Catalog
      </NavLink>

      <NavLink className={activeLink} to={`campers/${id}`}>
        Features
      </NavLink>

      <NavLink className={activeLink} to={`campers/${id}/reviews`}>
        Reviews
      </NavLink>
    </div>
  );
}
