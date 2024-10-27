import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './CatalogPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import SideBarForm from '../../components/SideBarForm/SideBarForm.jsx';
import { changePage } from '../../redux/slice.js';
import {
  selectCapmers,
  selectError,
  selectPage,
  selectFilters,
  selectTotalPages,
  selectFavorite,
  selectLoading,
} from '../../redux/selectors.js';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import { fetchAll } from '../../redux/operations.js';

function CatalogPage() {
  const loading = useSelector(selectLoading);
  const campers = useSelector(selectCapmers);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const totalPages = useSelector(selectTotalPages);
  const favs = useSelector(selectFavorite);
  const err = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch, filters, page]);

  function clickHandler() {
    dispatch(changePage(page + 1));
  }

  return !loading ? (
    <section className={css.section}>
      <div className={css.wrapperCatalog}>
        <SideBarForm />
        {!err ? (
          <>
            <CatalogList
              totalPages={totalPages}
              page={page}
              clickHandler={clickHandler}
              campers={campers}
              favs={favs}
            />
            {totalPages <= page && (
              <p className={css.notFoundErr}>
                Unfortunately, the catalog has ended
              </p>
            )}
          </>
        ) : (
          <p className={css.notFoundErr}>Request not found,try again!</p>
        )}
      </div>
    </section>
  ) : (
    <Loader />
  );
}

export default CatalogPage;
