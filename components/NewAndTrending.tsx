import Image from "next/image";
import styles from "../styles/NewAndTrending.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchGamesData } from "../api/fetchGamesData";
import GameCard from "./GameCard";
import Loader from "./Loader";
import { GamesListProps } from "../types/GamesList";
import Error from "./Error";
import { prevDate, currentDate } from "../utils/formattedDate";

console.log("prev",prevDate);
console.log("current",currentDate);



const NewAndTrending = () => {
  const { data, isLoading, error } = useQuery<GamesListProps>(
    ["trending"],
    () => fetchGamesData("games", `${prevDate},${currentDate}`),
    { staleTime: Infinity }
  );



  const GamesList = data?.results?.map((game) => (
    <GameCard
      image={game.background_image}
      alt={game.name}
      name={game.name}
      genres = {game.genres}
      id = {game.id}
      key={game.id}
      />
  ));

  if (error) {
    return <Error/>;
  }

  if (isLoading) {
    return <Loader/>;
  }

  return <section className={styles.container}>
    {GamesList}
  </section>;
};

export default NewAndTrending;
