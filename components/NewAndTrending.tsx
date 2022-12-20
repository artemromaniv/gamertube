import Image from "next/image";
import styles from "../styles/NewAndTrending.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchGamesData } from "../api/fetchGamesData";
import GameCard from "./GameCard";
import Loader from "./Loader";
import { GamesListProps } from "../types/GamesList";

const dateObj = new Date();
const currentDate = dateObj.toISOString().slice(0, 10);
const prevDate = dateObj.setMonth(dateObj.getMonth() - 3);
console.log(prevDate);

const NewAndTrending = () => {
  const { data, isLoading, error } = useQuery<GamesListProps>(
    ["trending"],
    () => fetchGamesData("games", `2022-08-01,${currentDate}`),
    { staleTime: Infinity }
  );

  console.log(data?.results);

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
    return <div>Failed to load games data :( </div>;
  }

  if (isLoading) {
    return <Loader/>;
  }

  return <section className={styles.container}>{GamesList}</section>;
};

export default NewAndTrending;
