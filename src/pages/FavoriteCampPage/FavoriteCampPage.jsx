import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import css from './FavoriteCampPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import {
  selectFavoritesId,
  selectLoading,
} from '../../redux/campers/campersSelectors.js';
import { toggleFavorite } from '../../redux/campers/campersSlice.js';
import {
  loadFavoritesFromLocalStorage,
  saveFavoritesToLocalStorage,
} from '../../redux/operation/localStorageHelpers.js';
import { FormBook } from '../../components/FormBook/FormBook.jsx';

function FavoriteCampPage() {
  const favoriteIds = useSelector(selectFavoritesId);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedFavorites = loadFavoritesFromLocalStorage();
    savedFavorites.forEach(id => dispatch(toggleFavorite(id)));
  }, [dispatch]);

  useEffect(() => {
    saveFavoritesToLocalStorage(favoriteIds);
  }, [favoriteIds]);

  //  списки камперів
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
            <FormBook />
            <FavoriteCampList
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
