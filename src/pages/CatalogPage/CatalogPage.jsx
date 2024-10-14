import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/campersSlice.js';
import css from './CatalogPage.module.css';
import AppBar from '../../components/AppBar/AppBar.jsx';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import {
  selectLoading,
  selectPage,
  selectPerPage,
  selectSortBy,
  selectSortOrder,
} from '../../redux/campers/campersSelectors.js';
import { selectLocation } from '../../redux/filters/filtersSelectors.js';

const CatalogPage = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);
  const location = useSelector(selectLocation);
  const filter = { location };
  const params = { page, perPage, sortBy, sortOrder, filter };
  useEffect(() => {
    dispatch(fetchCampers(params));
  }, [dispatch, page, perPage, sortBy, sortOrder]);

  return (
    <>
      <AppBar />
      <div className={css.wrapperCatalog}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <SideBar />
            <CatalogList />
          </>
        )}
      </div>
    </>
  );
};

export default CatalogPage;

// __________________get json;
// import { NavLink } from 'react-router-dom';
// const CatalogPage = () => {
//   const [campers, setCampers] = React.useState(data.items);

//   return (
//     <div>
//       <h1>Catalog</h1>
//       {campers.map(camper => (
//         <div key={camper.id}>
//           <h2>{camper.name}</h2>
//           <p>{camper.description}</p>
//           <NavLink to={`/campers/${camper.id}`}>Show More</NavLink>
//         </div>
//       ))}
//
//     </div>
//   );
// };

// export default CatalogPage;

{
  /* ============================ */
}
{
  /* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from './../../components/SideBar/SideBar';
import { AppBar } from './../../components/AppBar/AppBar';
import { selectSortBy } from './../../redux/campers/selectors';
import { selectLocation } from './../../redux/filters/selectors';

const CatalogPage = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Виконуємо GET запит до API
    axios.get('https://api.example.com/campers')
      .then(response => {
        setCampers(response.data.items); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Catalog</h1>
      {campers.map(camper => (
        <div key={camper.id}>
          <h2>{camper.name}</h2>
          <p>{camper.description}</p>
          <NavLink to={`/campers/${camper.id}`}>Show More</NavLink>
        </div>
      ))}
    </div>
  );
};

export default CatalogPage;
 
  /* ============================ */
}
