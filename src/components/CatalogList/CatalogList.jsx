// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';
// import css from './CatalogList.module.css';
// import CatalogItem from '../CatalogItem/CatalogItem.jsx';
// import ToastNotification from '../ToastNotification/ToastNotification.jsx';
// import { fetchCampers } from '../../redux/campers/campersApi.js';
// import {
//   selectPage,
//   selectCampersList,
//   selectLoading,
//   selectError,
// } from '../../redux/campers/campersSelectors.js';
// import { setPage } from '../../redux/campers/campersSlice.js';

// const CatalogList = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const page = useSelector(selectPage);
//   const campersList = useSelector(selectCampersList);
//   const isLoading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const currentPage = parseInt(queryParams.get('page')) || 1;
//     dispatch(setPage(currentPage));
//     dispatch(fetchCampers());
//   }, [location.search, dispatch]);

//   const handleNavigate = newPage => {
//     const queryParams = new URLSearchParams(location.search);
//     queryParams.set('page', newPage);
//     navigate(`/catalog?${queryParams.toString()}`);
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <section className={css.section}>
//       <ToastNotification />
//       {campersList && campersList.length > 0 ? (
//         <ul className={css.list}>
//           {campersList.map(item => (
//             <CatalogItem key={item.id} item={item} />
//           ))}
//         </ul>
//       ) : (
//         <p className={css.notFound}>The catalog of vehicles has ended.</p>
//       )}
//       <button onClick={() => handleNavigate(page + 1)}>Next Page</button>
//       <button onClick={() => handleNavigate(page - 1)}>Previous Page</button>
//     </section>
//   );
// };

// export default CatalogList;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import ToastNotification from '../ToastNotification/ToastNotification.jsx';
import { fetchCampers } from '../../redux/campers/campersApi.js';
import {
  selectPage,
  selectCampersList,
  selectLoading,
  selectError,
} from '../../redux/campers/campersSelectors.js';
import { setPage } from '../../redux/campers/campersSlice.js';

const CatalogList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const page = useSelector(selectPage);
  const campersList = useSelector(selectCampersList);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get('page')) || 1;
    dispatch(setPage(currentPage));
    dispatch(fetchCampers());
  }, [location.search, dispatch]);

  const handleNavigate = newPage => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', newPage);
    navigate(`/catalog?${queryParams.toString()}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className={css.section}>
      <ToastNotification />
      {campersList && campersList.length > 0 ? (
        <ul className={css.list}>
          {campersList.map(item => (
            <CatalogItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className={css.notFound}>The catalog of vehicles has ended.</p>
      )}
      <button onClick={() => handleNavigate(page + 1)}>Next Page</button>
      <button onClick={() => handleNavigate(page - 1)}>Previous Page</button>
    </section>
  );
};

export default CatalogList;
