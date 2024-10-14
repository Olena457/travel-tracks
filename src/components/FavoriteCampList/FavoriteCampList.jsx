import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import css from './FavoriteCampList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import { selectFavoritesList } from '../../redux/campers/campersSelectors.js';
import Button from '../Button/Button.jsx';
import { toast } from 'react-hot-toast';
import ToastNotification from '../ToastNotification/ToastNotification.jsx';

const PER_PAGE = 4;

function FavoriteCampList({ favoriteIds }) {
  const campersList = useSelector(selectFavoritesList);
  const [page, setPage] = useState(1);
  const [visibleCampersList, setVisibleCampersList] = useState(
    campersList.slice(0, page * PER_PAGE)
  );

  useEffect(() => {
    setVisibleCampersList(campersList.slice(0, page * PER_PAGE));
    if (campersList.length === 0) {
      toast.error('Favorites not found.');
    }
  }, [campersList, page]);

  const isVisible = page * PER_PAGE < campersList.length;

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section className={css.section}>
      <ToastNotification />
      {favoriteIds.length > 0 ? (
        <>
          <ul className={css.list}>
            {visibleCampersList.map(item => (
              <CatalogItem key={item._id} item={item} />
            ))}
          </ul>
          {isVisible && (
            <Button
              className={css.loadMore}
              type="button"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          )}
        </>
      ) : (
        <p className={css.notFound}>"Favorites not found."</p>
      )}
    </section>
  );
}

export default FavoriteCampList;
