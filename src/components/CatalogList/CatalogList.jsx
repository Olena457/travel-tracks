import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchCampers, setPage } from '../../redux/campers/campersSlice.js';
import css from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import Button from '../Button/Button.jsx';
import ToastNotification from '../ToastNotification/ToastNotification.jsx';

const PER_PAGE = 4;

const CatalogList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { items: campersList, totalItems, page, loading, error } = useSelector(
    state => state.campers
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get('page')) || 1;
    const filterParams = {
      page: currentPage,
      perPage: PER_PAGE,
    };
    dispatch(fetchCampers(filterParams));
  }, [location.search, dispatch]);

  const handleLoadMore = () => {
    const newPage = page + 1;
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', newPage);
    navigate(`/catalog?${queryParams.toString()}`);
    dispatch(setPage(newPage));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={css.section}>
      <ToastNotification />
      {campersList.length > 0 ? (
        <>
          <ul className={css.list}>
            {campersList.map(item => (
              <CatalogItem key={item.id} item={item} />
            ))}
          </ul>
          {page * PER_PAGE < totalItems && (
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
        <p className={css.notFound}>The catalog of vehicles has ended.</p>
      )}
    </section>
  );
};

export default CatalogList;
