import { Suspense } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import css from './ShoweMorePage.module.css';

import AboutCamperFavorite from '../../components/AboutCamperFavorite/AboutCamperFavorite.jsx';
import axiosGetOne from '../../api/axiosGetOne.js';
import FormBook from '../../components/FormBook/FormBook.jsx';
import { selectLoading } from '../../redux/selectors.js';
import { changeLoading } from '../../redux/slice.js';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader.jsx';

function CapmerDetailsPage() {
  const [item, setItem] = useState();
  const loading = useSelector(selectLoading);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getInfo() {
      try {
        dispatch(changeLoading(true));
        const response = await axiosGetOne(id);
        setItem(response);
      } catch {
        toast('Something went wrong try again', {
          style: { backgroundColor: 'red' },
        });
      } finally {
        dispatch(changeLoading(false));
      }
    }
    getInfo();
  }, [dispatch, id]);

  return !loading && item ? (
    <section className={css.section}>
      <AboutCamperFavorite data={item} />
      <ul className={css.linkList}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : undefined)}
            to="futures"
          >
            Futures
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : undefined)}
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.outletBox}>
        <Suspense fallback={<Loader />}>
          <Outlet context={{ data: item }} />
        </Suspense>
        <FormBook data={id} />
      </div>
    </section>
  ) : (
    <Loader />
  );
}

export default CapmerDetailsPage;
