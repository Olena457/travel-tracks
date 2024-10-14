const IconOptions = ({
  id,
  width,
  height,
  className = '',
  fillcolor,
  strokeColor,
}) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use
        href={`/spite.svg#icon-${id}`}
        style={{
          fill: `${fillcolor}`,
          stroke: id === 'like' ? `${strokeColor}` : 'none',
        }}
      ></use>
    </svg>
  );
};

export default IconOptions;
