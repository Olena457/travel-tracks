// import { useSelector } from 'react-redux';
// import css from './CatalogPage.module.css';
// import CatalogList from '../../components/CatalogList/CatalogList.jsx';
// import Loader from '../../components/Loader/Loader.jsx';
// import SideBar from '../../components/SideBar/SideBar.jsx';
// import {
//   selectPage,
//   selectPerPage,
//   selectSortBy,
//   selectSortOrder,
// } from '../../redux/campers/campersSelectors.js';
// import { selectLocation } from '../../redux/filters/filtersSelectors.js';
// import { useGetCampersQuery } from '../../redux/campers/campersApi.js';

// const CatalogPage = () => {
//   const page = useSelector(selectPage);
//   const perPage = useSelector(selectPerPage);
//   const sortBy = useSelector(selectSortBy);
//   const sortOrder = useSelector(selectSortOrder);
//   const location = useSelector(selectLocation);
//   const filter = { location };
//   const params = { filter };
//    page, perPage, sortBy, sortOrder,

//   const { data, error, isLoading } = useGetCampersQuery(params);

//   return (
//     <div className={css.wrapperCatalog}>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <SideBar />
//           <CatalogList campers={data?.items || []} total={data?.total || 0} />
//         </>
//       )}
//       {error && <div>Error: {error.message}</div>}
//     </div>
//   );
// };

// export default CatalogPage;

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCampers } from '../../redux/campers/campersSlice.js';
// import css from './CatalogPage.module.css';
// import CatalogList from '../../components/CatalogList/CatalogList.jsx';
// import Loader from '../../components/Loader/Loader.jsx';
// import SideBar from '../../components/SideBar/SideBar.jsx';
// import {
//   selectLoading,
//   selectPage,
//   selectPerPage,
//   selectSortBy,
//   selectSortOrder,
// } from '../../redux/campers/campersSelectors.js';
// import { selectLocation } from '../../redux/filters/filtersSelectors.js';

// const CatalogPage = () => {
//   const isLoading = useSelector(selectLoading);
//   const dispatch = useDispatch();
//   const page = useSelector(selectPage);
//   const perPage = useSelector(selectPerPage);
//   const sortBy = useSelector(selectSortBy);
//   const sortOrder = useSelector(selectSortOrder);
//   const location = useSelector(selectLocation);
//   const filter = { location };
//   const params = { page, perPage, sortBy, sortOrder, filter };
//   useEffect(() => {
//     dispatch(fetchCampers(params));
//   }, [dispatch, page, perPage, sortBy, sortOrder]);

//   return (
//     <div className={css.wrapperCatalog}>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <SideBar />
//           <CatalogList />
//         </>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './CatalogPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import {
  selectLoading,
  selectError,
} from '../../redux/campers/campersSelectors.js';
import { selectLocation } from '../../redux/filters/filtersSelectors.js';
// Виправлення шляху імпорту
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import { fetchCampers } from '../../redux/campers/campersApi.js';

const CatalogPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  useEffect(() => {
    dispatch(fetchCampers()); // Виконуємо запит без параметрів, оскільки в нас все отримується одразу
  }, [dispatch, location]);

  return (
    <>
      {/* <div className={css.wrapperCatalog}> */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <SideBar />
          <CatalogList />
        </>
      )}
      {/* </div> */}
    </>
  );
};

export default CatalogPage;
