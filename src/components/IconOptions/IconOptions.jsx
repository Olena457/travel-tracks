const IconOptions = ({ id, width, height, className = '', fillcolor }) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use
        href={`/spite.svg#icon-${id}`}
        style={{ fill: `${fillcolor}` }}
      ></use>
    </svg>
  );
};
export default IconOptions;
