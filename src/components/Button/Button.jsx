import clsx from clsx;
import css from './Button.css'
const Button = ({ className, children, onClick }) => {
  const getButton = () => {
    switch (children) {
      case 'Search':
        return css.baseButton;
      case 'Send':
        return css.baseButton;
      case 'Show More':
        return css.showMore;
      case 'Load More':
        return css.loadMore;
      case 'View Now':
        return css.viewNow;
      default:
        return css.baseButton;
    }
  };
  return (
    <>
      <button
        className={clsx(css.baseButton, getButtonStyle(), className)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
