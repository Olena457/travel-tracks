// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState, useMemo } from 'react';
// import css from './FavoriteCampList.module.css';
// import CatalogItem from '../CatalogItem/CatalogItem.jsx';
// import { selectFavoritesList } from '../../redux/campers/campersSelectors.js';
// import { removeFavorite } from '../../redux/campers/campersSlice.js';
// import Button from '../Button/Button.jsx';
// import { toast } from 'react-hot-toast';
// import ToastNotification from '../ToastNotification/ToastNotification.jsx';

// const PER_PAGE = 4;

// function FavoriteCampList({ campers }) {
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(1);

//   const visibleCampersList = useMemo(() => campers.slice(0, page * PER_PAGE), [
//     campers,
//     page,
//   ]);

//   useEffect(() => {
//     if (campers.length === 0) {
//       toast.error('Favorites not found.');
//     }
//   }, [campers]);

//   const isVisible = page * PER_PAGE < campers.length;

//   const handleLoadMore = () => {
//     setPage(prev => prev + 1);
//   };

//   const handleRemoveFavorite = id => {
//     dispatch(removeFavorite(id));
//   };

//   return (
//     <section className={css.section}>
//       <ToastNotification />
//       {campers.length > 0 ? (
//         <>
//           <ul className={css.list}>
//             {visibleCampersList.map(item => (
//               <li key={item.id} className={css.item}>
//                 <CatalogItem item={item} />
//                 <Button
//                   className={css.removeButton}
//                   type="button"
//                   onClick={() => handleRemoveFavorite(item.id)}
//                 >
//                   Remove
//                 </Button>
//               </li>
//             ))}
//           </ul>
//           {isVisible && (
//             <Button
//               className={css.loadMore}
//               type="button"
//               onClick={handleLoadMore}
//             >
//               Load more
//             </Button>
//           )}
//         </>
//       ) : (
//         <p className={css.notFound}>"Favorites not found."</p>
//       )}
//     </section>
//   );
// }

// export default FavoriteCampList;

import { useDispatch, useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
import css from './FavoriteCampList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import { removeFavorite } from '../../redux/campers/campersSlice.js';
import Button from '../Button/Button.jsx';
import ToastNotification from '../ToastNotification/ToastNotification.jsx';
import { selectFavCampers } from '../../redux/campers/campersSelectors.js';
import { deleteCamperById } from '../../redux/campers/campersApi.js';

const PER_PAGE = 10;

function FavoriteCampList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectFavCampers);
  const [page, setPage] = useState(1);
  const [deleteCamper] = deleteCamperById();

  const visibleCampersList = useMemo(() => campers.slice(0, page * PER_PAGE), [
    campers,
    page,
  ]);

  const isVisible = page * PER_PAGE < campers.length;

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleRemoveFavorite = async id => {
    try {
      await deleteCamper(id).unwrap(); // Виклик мутації для видалення кампера
      dispatch(removeFavorite(id)); // Оновлення стану після видалення
    } catch (error) {
      console.error('Failed to delete the camper:', error);
    }
  };

  return (
    <section className={css.section}>
      <ToastNotification />
      {campers.length > 0 ? (
        <>
          <ul className={css.list}>
            {visibleCampersList.map(item => (
              <li key={item.id} className={css.item}>
                <CatalogItem item={item} />
                <Button
                  className={css.removeButton}
                  type="button"
                  onClick={() => handleRemoveFavorite(item.id)}
                >
                  Remove
                </Button>
              </li>
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
        <p className={css.notFound}>Favorites not found.</p>
      )}
    </section>
  );
}

export default FavoriteCampList;
