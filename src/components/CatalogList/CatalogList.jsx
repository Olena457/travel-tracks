import css from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';

function CatalogList({ totalPages, page, clickHandler, favs, campers }) {
  return (
    <div>
      {campers.length > 0 ? (
        <>
          <ul className={css.list}>
            {campers.map(item => {
              const isFavorite = favs.includes(item.id);
              return (
                <li key={item.id}>
                  <CatalogItem data={item} isFavorite={isFavorite} />
                </li>
              );
            })}
          </ul>
          {totalPages > page && (
            <button className={css.loadMoreBtn} onClick={clickHandler}>
              Load more
            </button>
          )}
        </>
      ) : (
        <p className={css.notFound}>No campers found</p>
      )}
    </div>
  );
}

export default CatalogList;
