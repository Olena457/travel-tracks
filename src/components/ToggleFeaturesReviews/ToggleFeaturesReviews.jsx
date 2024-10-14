import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './ToggleFeaturesReviews.module.css';

function ToggleFeaturesReviews() {
  const { id } = useParams();

  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  return (
    <div className={css.containerToggle}>
      <div className={css.containerLink}>
        <NavLink className={activeLink} to={`/campers/${id}`}>
          Features
        </NavLink>
        <NavLink className={activeLink} to={`/campers/${id}/reviews`}>
          Reviews
        </NavLink>
      </div>
    </div>
  );
}

export default ToggleFeaturesReviews;
