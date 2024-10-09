import clsx from clsx;
const Button = ({ className, children, onClick }) => {
  return (
    <>
      <button
        className={clsx('baseButton', className)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
