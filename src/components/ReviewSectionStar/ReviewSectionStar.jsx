import css from './ReviewSectionStar.css';
import IconOptions from '../IconOptions/IconOptions.jsx';

function ReviewSectionStar({ review }) {
  const RATING_STAR_MAX = 5;
  const rating = (rating = review['reviewer_rating']);
  const emptyStar = RATING_STAR_MAX - rating;
  return (
    <div className={css.WrapperItem}>
      <li>
        <div className={css.itemInfo}>
          <div className={css.round}>{review['reviewer_name'][0]}</div>
          <div>
            <h5 className={css.title}>{review['review_name']}</h5>
            <ul className={css.star}>
              {Array(rating)
                .fill(0)
                .map((_, indx) => (
                  <li key={indx}>
                    <Icon
                      id="star-full"
                      width={16}
                      height={16}
                      fillColor={'#FFC531'}
                    />
                  </li>
                ))}
              {Array(emptyStar)
                .fill(0)
                .map((_, indx) => (
                  <li key={indx}>
                    <IconOptions key={indx} id="star-empty" />
                    width={16}
                    height={16}
                    fillColor={' #F2F4F7'}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <p className={css.description}>{review.comment}</p>
      </li>
    </div>
  );
}

export default ReviewSectionStar;
