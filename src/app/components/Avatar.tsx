type AvatarProps = {
  /** Id for the character. */
  id: number,
  /** Name for the character. */
  name: string,
  /** Image URL for the character. */
  image: string,
};

const Avatar = ({id, name, image}: AvatarProps) => {
  return (
    <div className="avatar">
      <img loading="lazy" src={image}/>
      <p>{name}</p>
    </div>
  );
}

export default Avatar;
