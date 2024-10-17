// import { NavLink, useParams } from 'react-router-dom';
// import clsx from 'clsx';
// import css from './ToggleFeaturesReviews.module.css';

// function ToggleFeaturesReviews() {
//   const { id } = useParams();

//   function activeLink({ isActive }) {
//     return clsx(css.link, isActive && css.active);
//   }

//   return (
//     <div className={css.containerToggle}>
//       <div className={css.containerLink}>
//         <NavLink className={activeLink} to={`/campers/${id}`}>
//           Features
//         </NavLink>
//         <NavLink className={activeLink} to={`/campers/${id}/reviews`}>
//           Reviews
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default ToggleFeaturesReviews;
import { NavLink, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './ToggleFeaturesReviews.module.css';
import { fetchCamperById } from '../../redux/campers/campersApi.js';
import { Outlet } from 'react-router-dom';
function ToggleFeaturesReviews() {
  const { id } = useParams();
  const { data, error, isLoading } = fetchCamperById(id);

  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  if (!data) return <div>No data found.</div>;

  return (
    <div className={css.containerToggle}>
      <div className={css.containerLink}>
        <NavLink className={activeLink} to={`/catalog/${id}/features`}>
          Features
        </NavLink>
        <NavLink className={activeLink} to={`/catalog/${id}/reviews`}>
          Reviews
        </NavLink>
      </div>
      {/* <div className={css.camperDetails}>
        <h2>{data.name}</h2>
        <p>{data.description}</p> */}
      {/* </div> */}
      <Outlet />
    </div>
  );
}

export default ToggleFeaturesReviews;
