import React from 'react';
import { Link } from 'react-router-dom';
import { CamperItemOptions } from '../CamperItemOptions/CamperItemOptions.jsx';
import Button from '../Button/Button.jsx';
import css from './CatalogItem.module.css';

function CatalogItem({ item }) {
  return (
    <li className={css.item}>
      <img className={css.img} src={item.gallery[0].thumb} alt={item.name} />
      <div className={css.container}>
        <div className={css.containerInfo}>
          <div className={css.containerName}>
            <h3 className={css.name}>{item.name}</h3>
            <div className={css.ContainerPrise}>
              <h3 className={css.price}>€{item.price.toFixed(2)}</h3>
              <button
                type="button"
                onClick={() => dispatchEvent(toggleFavorite(item._id))}
              >
                <Icon
                  id="like"
                  className={css.like}
                  width={24}
                  height={24}
                  fillColor="none"
                  strokeColor={isFavorite ? '#e44848' : '#101828'}
                />
              </button>
            </div>
          </div>
          <div className={css.containerRating}>
            {isFavorite ? (
              <Icon
                id="star-full"
                className={css.star}
                width={16}
                height={16}
                fillColor="#FFC531"
              />
            ) : (
              <Icon
                id="star-empty"
                className={css.star}
                width={16}
                height={16}
                fillColor="#F2F4F7"
              />
            )}
            <p
              className={css.rating}
            >{`${item.rating} (${item.reviews.length} Reviews)`}</p>
            <p className={css.location}>
              <Icon
                id="location"
                width={16}
                height={16}
                className={css.locationIcon}
              />
              {item.location}
            </p>
            <p className={css.aboutCamper}>{item.description}</p>
            <CamperItemOptions />
          </div>
          <p className={css.aboutText}>{item.description}</p>
          <Link to={`/campers/${item.id}`} target="_blank">
            <Button type="button" className={css.showMore}>
              Show More
            </Button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default CatalogItem;
