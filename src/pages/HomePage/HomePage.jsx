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
            <Link to="/catalog" className={css.viewNow}>
              View Now
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};
export default HomePage;
