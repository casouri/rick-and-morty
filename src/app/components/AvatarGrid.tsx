import { useEffect, useState } from "react";

import Avatar from "./Avatar";

const CHARACTER_URL = 'https://rickandmortyapi.com/api/character';

type Character = {
  id: number,
  name: string,
  image: string,
};


type AvatarGridProps = {
  /** Page to show. */
  page: number,
  /** Setter for the totalPage state. */
  setTotalPage: (page: number) => void,
};


const AvatarGrid = ({page, setTotalPage}: AvatarGridProps) => {
  const [images, setImages] = useState([] as Array<Character>);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const subr = async () => {
      try {
          const resp = await fetch(CHARACTER_URL + '?' + new URLSearchParams({
          page: page.toString()
        }));
        const data = await resp.json();

        setTotalPage(data.info.pages);

        const images = data.results.map((entry: any) => ({
          id: entry.id,
          name: entry.name,
          image: entry.image
        }));
        setImages(images);
      } catch (err) {
        setErrorMsg("Sorry, something went wrong when fetching data from the backend.");
      }
    };

    subr();
  }, [page]);

  const avatars = images.map((entry: Character) =>
    <Avatar key={entry.id}
      id={entry.id}
      name={entry.name}
      image={entry.image}
    />);

  if (errorMsg !== "") {
    return (<div className="avatar-grid-error"><p>{errorMsg}</p></div>)
  } else {
    return (<div className="avatar-grid">{avatars}</div>);
  }
}

export default AvatarGrid;
