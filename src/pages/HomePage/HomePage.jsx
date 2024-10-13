import { Link } from 'react-router-dom';
import css from './HomePage.css';
import AppBar from '../../components/AppBar/AppBar.jsx';
import Button from '../../components/Button/Button.jsx';

const HomePage = () => {
  return (
    <>
      <AppBar />
      <div className={css.mainContainer}>
        <div className={css.container}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.description}>
            You can find everything you want in our catalog
            <Link to="/campers">
              <Button className={css.viewNow}>View Now</Button>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};
export default HomePage;
