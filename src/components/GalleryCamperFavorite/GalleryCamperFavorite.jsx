import React from 'react';
import IconOptions from './../IconOptions/IconOptions';
import css from './GalleryCamperFavorite.module.css';

function GalleryCamperFavorite() {
  return (
    <div className={css.container}>
      <h3 className={css.name}>{item.name}</h3>

      <div className={css.ratingWrapper}>
        <IconOptions
          id="star-full"
          className={css.star}
          width={16}
          height={16}
          fillColor="#FFC531"
        />

        <p
          className={css.rating}
        >{`${item.rating} (${item.reviews.length} Reviews)`}</p>
        <p className={css.location}>
          <IconOptions
            id="location"
            width={16}
            height={16}
            className={css.locationIcon}
          />
          {item.location}
        </p>
      </div>

      <h3 className={css.price}>€ {item.price.toFixed(2)}</h3>

      <ul className={css.list}>
        {item.gallery.map((image, idx) => {
          return (
            <li key={idx} className={css.item}>
              <img src={image} className={css.photoFavorite} />
            </li>
          );
        })}
      </ul>

      <div className={css.descriptionWrapper}>
        <p className={css.aboutDescription}>{item.description}</p>
      </div>
    </div>
  );
}

export default GalleryCamperFavorite;
