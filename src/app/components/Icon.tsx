type IconProps = {
  /** Name of the symbol. */
  name: string;
};

const Icon = ({ name }: IconProps) => {
  return <span className="material-symbols-outlined">{name}</span>;
};

export default Icon;
