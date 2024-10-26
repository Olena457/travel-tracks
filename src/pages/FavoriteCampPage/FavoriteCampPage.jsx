import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import css from './FavoriteCampPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import { selectLoading, selectFavoritesId } from '../../redux/selectors.js';
import { deleteFavoriteById } from '../../redux/favorites/favoritesSlice.js';
import CatalogListFavorite from './../../components/CatalogListFavorite/CatalogListFavorite.jsx';

function FavoriteCampPage() {
  const favoriteIds = useSelector(selectFavoritesId);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    favoriteIds.forEach(id => dispatch(deleteFavoriteById(id)));
  }, [dispatch, favoriteIds]);

  const campers = useSelector(state =>
    favoriteIds.map(id => state.campers.items.find(camper => camper.id === id))
  );

  return (
    <>
      <div className={css.wrapperFavoriteList}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CatalogListFavorite
              favoriteIds={favoriteIds}
              campers={campers || []}
            />
          </>
        )}
        {campers.length === 0 && (
          <div className={css.message}>Favorites not found</div>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default FavoriteCampPage;
