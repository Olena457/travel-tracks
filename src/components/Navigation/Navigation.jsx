import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

export default function Navigation() {
  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  return (
    <div className={css.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="/catalog">
        Catalog
      </NavLink>
    </div>
  );
}
