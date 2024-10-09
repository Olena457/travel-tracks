import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';

import Authorization from '../Authorization/Authorization.jsx';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>Travel Tracks</h2>
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
      <div>{!isLoggedIn && <Authorization />}</div>
    </>
  );
};

export default AppBar;
