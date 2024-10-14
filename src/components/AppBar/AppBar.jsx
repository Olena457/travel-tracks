import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.logoContainer}>
          <svg className={css.logo}>
            <use href="#icon-logo"></use>
          </svg>
          <span className={css.logoTextBlack}>Travel</span>
          <span className={css.logoTextGrey}>Track</span>
        </div>
        <div className={css.containerNavigation}>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default AppBar;
