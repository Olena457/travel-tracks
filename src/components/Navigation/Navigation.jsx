// import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';
// import css from './Navigation.module.css';

// export default function Navigation() {
//   function activeLink({ isActive }) {
//     return clsx(css.link, isActive && css.active);
//   }

//   return (
//     <div className={css.container}>
//       <NavLink className={activeLink} to="/">
//         Home
//       </NavLink>
//       <NavLink className={activeLink} to="/campers">
//         Catalog
//       </NavLink>
//       <NavLink className={activeLink} to="/campers/:id">
//         Favorite
//       </NavLink>
//     </div>
//   );
// }
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { selectFavoritesId } from '../../redux/campers/campersSelectors.js';

export default function Navigation() {
  const favoriteIds = useSelector(selectFavoritesId);

  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  return (
    <div className={css.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="catalog">
        Catalog
      </NavLink>
      {favoriteIds.length > 0 && (
        <NavLink className={activeLink} to={`catalog/${favoriteIds[0]}`}>
          Favorite
        </NavLink>
      )}
    </div>
  );
}
