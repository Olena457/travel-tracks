import css from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
function CampersList({ totalPages, page, clickHandler, favs, campers }) {
  return (
    <div>
      <ul className={css.list}>
        {campers.map(item => {
          const isFavorite = favs.includes(item.id);
          return (
            <li key={item.id}>
              <CatalogItem data={item} isFavorite={isFavorite}></CatalogItem>
            </li>
          );
        })}
      </ul>
      {totalPages > page ? (
        <button className={css.loadMore} onClick={clickHandler}>
          Load more
        </button>
      ) : (
        <p className={css.notFound}> Unfortunately, the catalog has ended</p>
      )}
    </div>
  );
}

export default CampersList;
