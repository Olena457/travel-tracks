import css from './GeneralWrapperFavorite.module.css';
const GeneralWrapperFavorite = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
export default GeneralWrapperFavorite;
