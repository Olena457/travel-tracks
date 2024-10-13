import { FormBook } from '../FormBook/FormBook.jsx';
import ReviewSectionStar from '../ReviewSectionStar/ReviewSectionStar.jsx';
import css from './ReviewFavorite.module.css';
const ReviewFavorite = ({ item }) => {
  return (
    <>
      <div className={css.contanerReview}>
        {item.review.length > 0 ? (
          <ul className={css.list}>
            {item.review.map((review, indx) => (
              <ReviewSectionStar key={indx} review={review} />
            ))}
          </ul>
        ) : (
          <p className={css.notFound}>No reveiws</p>
        )}
        <FormBook />
      </div>
    </>
  );
};

export default ReviewFavorite;
