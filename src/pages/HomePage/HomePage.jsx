import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={css.mainContainer}>
        <div className={css.container}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.description}>
            You can find everything you want in our catalog
          </h2>
          <Link to="/catalog" className={css.viewNow}>
            View Now
          </Link>
        </div>
      </div>
    </>
  );
};
export default HomePage;
