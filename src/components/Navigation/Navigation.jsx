import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './ToggleFeaturesReviews.module.css';

function ToggleFeaturesReviews() {
  const { id } = useParams();

  return (
    <div className={css.containerToggle}>
      <NavLink
        className={clsx(css.link, {
          [css.active]: location.pathname === `/campers/${id}`,
        })}
        to={`/campers/${id}`}
      >
        Features
      </NavLink>
      <NavLink
        className={clsx(css.link, {
          [css.active]: location.pathname === `/campers/${id}/reviews`,
        })}
        to={`/campers/${id}/reviews`}
      >
        Reviews
      </NavLink>
    </div>
  );
}

export default ToggleFeaturesReviews;
