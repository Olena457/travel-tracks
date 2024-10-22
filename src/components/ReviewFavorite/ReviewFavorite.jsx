import { useOutletContext } from 'react-router-dom';
import css from './ReviewFavorite.module.css';
import Icon from '../Icon.jsx';

function ReviewFavorite() {
  const { data } = useOutletContext();

  return (
    <>
      {!data.reviews || data.reviews.length === 0 ? (
        <p className={css.noReviews}>No reviews yet for this vehicle</p>
      ) : (
        <ul className={css.ContainerReview}>
          {data.reviews.map(item => {
            const letter = item.reviewer_name.charAt(0).toUpperCase();
            const rating = item.reviewer_rating;
            return (
              <li key={item.reviewer_name + 'keyRev'}>
                <div className={css.userInfo}>
                  <div className={css.avatar}>{letter}</div>
                  <div className={css.nameBox}>
                    <p>{item.reviewer_name}</p>
                    <ul className={css.starBox}>
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <Icon
                            cl={
                              rating >= i + 1 ? css.iconStar : css.iconStarEmpty
                            }
                            id="icon-star"
                            width={16}
                            height={16}
                          ></Icon>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className={css.description}>{item.comment}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ReviewFavorite;
