import css from './AboutCamperFavorite.module.css';
import Icon from '../Icon.jsx';

function AboutCamperFavorite({ data }) {
  return (
    <div className={css.aboutWrapper}>
      <h3 className={css.title}>{data.name}</h3>
      <ul className={css.locationRating}>
        <li>
          <Icon cl={css.iconStar} id="icon-star" width={16} height={16}></Icon>
          {`${data.rating}(${data.reviews.length} reviews)`}
        </li>
        <li className={css.location}>
          <Icon cl={css.mapIcon} id="icon-map" width="20" height="20"></Icon>
          <p className={css.location}>{data.location}</p>
        </li>
      </ul>
      <p className={css.price}>{`€ ${data.price
        .toFixed(2)
        .replace('.', ',')}`}</p>
      <ul className={css.listImg}>
        {data.gallery.map(item => (
          <li className={css.containerImg} key={item.original}>
            <img className={css.img} src={item.original} alt="" />
          </li>
        ))}
      </ul>
      <p className={css.description}>{data.description}</p>
    </div>
  );
}

export default AboutCamperFavorite;
