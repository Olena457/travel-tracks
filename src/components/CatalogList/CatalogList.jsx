import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import Button from '../Button/Button.jsx';

// import { selectCampersList } from '../../store/selectors';
// логіка кнопки

const PER_PAGE = 4;

function CatalogList() {
  const campersList = useSelector(selectCampersList);
  const [page, setPage] = useState(1);
  const [visibleCampersList, setVisibleCampersList] = useState(
    campersList.slice(0, page * PER_PAGE)
  );

  useEffect(() => {
    setVisibleCampersList(campersList.slice(0, page * PER_PAGE));
  }, [campersList, page]);

  const isVisible = page * PER_PAGE < campersList.length;

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section className={css.section}>
      {campersList.length > 0 ? (
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
        <p className={css.notFound}>The catalog of vehicles has ended.</p>
      )}
    </section>
  );
}

export default CatalogList;
