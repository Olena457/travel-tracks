import css from './CatalogListFavorite.module.css';
import CatalogItemFavorite from '../CatalogItem/CatalogItem.jsx';

function CatalogListFavorite({
  totalPages,
  page,
  clickHandler,
  favs,
  campers,
}) {
  return (
    <div>
      <ul className={css.list}>
        {campers.map(item => {
          const isFavorite = favs.includes(item.id);
          return (
            <li key={item.id}>
              <CatalogItemFavorite data={item} isFavorite={isFavorite} />
            </li>
          );
        })}
      </ul>
      {totalPages > page ? (
        <button className={css.loadMoreBtn} onClick={clickHandler}>
          Load more
        </button>
      ) : (
        <p className={css.notFound}>Unfortunately the catalog has ended</p>
      )}
    </div>
  );
}

export default CatalogListFavorite;
