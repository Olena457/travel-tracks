import css from './GeneralWrapperFavorite.module.css';
const GeneralWrapperFavorite = ({ children }) => {
  return <div className={css.rapper}>{children}</div>;
};
export default GeneralWrapperFavorite;
