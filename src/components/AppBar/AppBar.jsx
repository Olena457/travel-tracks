import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/TravelTracks.svg';

import css from './AppBar.module.css';

export const AppBar = ({}) => {
  const location = useLocation();

  return (
    <header className={css.header}>
      <Link className={css.logo} to="/">
        <img src={logo} width="135" height="15" />
      </Link>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => {
          return isActive && location.pathname === '/catalog'
            ? css.active
            : undefined;
        }}
      >
        Catalog
      </NavLink>
    </header>
  );
};

export default AppBar;
