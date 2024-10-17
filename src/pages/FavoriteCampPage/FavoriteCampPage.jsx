import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './FavoriteCampPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import {
  selectFavoritesId,
  selectLoading,
} from '../../redux/campers/campersSelectors.js';
import { fetchCamperById } from '../../redux/campers/campersApi.js';
import FavoriteCampList from '../../components/FavoriteCampList/FavoriteCampList.jsx';

function FavoriteCampPage() {
  const favoriteIds = useSelector(selectFavoritesId);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    favoriteIds.forEach(id => {
      dispatch(fetchCamperById(id));
    });
  }, [dispatch, favoriteIds]);

  // Відображаємо списки камперів
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
            <SideBar />
            <FavoriteCampList
              favoriteIds={favoriteIds}
              campers={campers || []}
            />
          </>
        )}
        {campers.length === 0 && (
          <div className={css.message}>Favorites not found</div>
        )}
      </div>
    </>
  );
}

export default FavoriteCampPage;
