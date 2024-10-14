import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ className, children, onClick }) => {
  const getButtonStyle = () => {
    switch (children.toLowerCase()) {
      case 'search':
        return css.baseButton;
      case 'send':
        return css.baseButton;
      case 'show more':
        return css.showMore;
      case 'load more':
        return css.loadMore;
      case 'view now':
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
