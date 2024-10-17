import { Link } from 'react-router-dom';
import { selectFavoritesId } from '../../redux/campers/campersSelectors.js';
import { toggleFavorite } from '../../redux/campers/campersSlice.js';
import css from './CatalogItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import IconOptions from './../IconOptions/IconOptions.jsx';

function CatalogItem({ item }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesId);
  const isFavorite = favorites.indexOf(item._id) === -1 ? false : true;

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
                onClick={() => dispatch(toggleFavorite(item._id))}
              >
                <IconOptions
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
              <IconOptions
                id="star-full"
                className={css.star}
                width={16}
                height={16}
                fillColor="#FFC531"
              />
            ) : (
              <IconOptions
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
              <IconOptions
                id="location"
                width={16}
                height={16}
                className={css.locationIcon}
              />
              {item.location}
            </p>
            <p className={css.aboutDescription}>{item.description}</p>
            <CamperItemOptions item={item} />
          </div>
          <Link to={`/catalog/${item.id}`} target="_blank">
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
