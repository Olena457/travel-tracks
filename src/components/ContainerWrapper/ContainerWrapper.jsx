import css from './ContainerWrapper.module.css';
const ContainerWrapper = ({ children }) => {
  return <div className={css.containerWrapper}>{children}</div>;
};
export default ContainerWrapper;
