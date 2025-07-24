const Icon = ({ name, size = 24}) => {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
