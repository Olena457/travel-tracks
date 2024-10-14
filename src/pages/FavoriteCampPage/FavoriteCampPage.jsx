// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import css from './FavoriteCampPage.module.css';
// import Loader from '../../components/Loader/Loader.jsx';
// import SideBar from '../../components/SideBar/SideBar.jsx';
// import {
//   selectFavoritesId,
//   selectLoading,
// } from '../../redux/campers/campersSelectors.js';
// import { fetchCampers } from './../../redux/campers/operation';
// // import FavoriteCampList from './../../components/FavoriteCampList/FavoriteCampList';
// import AppBar from '../../components/AppBar/AppBar.jsx';

// function FavoriteCampPage() {
//   const favoriteIds = useSelector(selectFavoritesId);
//   const isLoading = useSelector(selectLoading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCampers());
//   }, [dispatch]);

//   return (
//     <>
//       <AppBar />
//       <div className={css.wrapperFavoriteList}>
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <>
//             <SideBar />
//             <FavoriteCampList favoriteIds={favoriteIds} />
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default FavoriteCampPage;
