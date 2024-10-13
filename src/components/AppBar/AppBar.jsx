import Navigation from '../Navigation/Navigation.jsx';
import React from 'react';
import css from './AppBar.module.css';
import { ReactComponent as Logo } from '../../../public/Logo.svg';

export const AppBar = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.logoContainer}>
          <Logo className={css.logo} />
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
