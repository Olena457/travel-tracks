import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { selectFavoritesId } from '../../redux/campers/campersSelectors.js';

export default function Navigation() {
  const favoriteIds = useSelector(selectFavoritesId);
  const location = useLocation();

  function activeLink({ isActive, to }) {
    return clsx(
      css.link,
      isActive && location.pathname.startsWith(to) && css.active
    );
  }

  return (
    <div className={css.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="/catalog">
        Catalog
      </NavLink>
      {favoriteIds.length > 0 && (
        <NavLink className={activeLink} to={`/catalog/${favoriteIds[0]}`}>
          Favorite
        </NavLink>
      )}
    </div>
  );
}
