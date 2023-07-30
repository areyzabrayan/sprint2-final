import { getMovie } from "./getMovie";
import { getMovies } from "./getMovies";

export const getData = async (category, setCards) => {
  const list = [];

  const data = await getMovies();

  for (let i = 0; i < data.length; i++) {
    const detailMovie = await getMovie(data[i].id);
    list.push(detailMovie);
  }

  if (category === "") {
    setCards(list);
  } else {
    const filterGenders = list.filter((item) =>
      item.gender.find((gender) => gender === category)
    );
    setCards(filterGenders);
  }
};
