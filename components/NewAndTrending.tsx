import Image from "next/image";
import styles from "../styles/NewAndTrending.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchGamesData } from "../api/fetchGamesData";
import GameCard from "./GameCard";

type GameProps = {
  results: {
    id: string;
    name: string;
    background_image: string;
  }[];
};

const dateObj = new Date()
const currentDate = dateObj.toISOString().slice(0, 10)
const prevDate = dateObj.setMonth(dateObj.getMonth() - 3)
console.log(prevDate);

const NewAndTrending = () => {
  const { data, isLoading, error } = useQuery<GameProps>(
    ["trending"],
    () => fetchGamesData("games",`2022-08-01,${currentDate}`),
    { staleTime: Infinity }
  );

  const GamesList = data?.results?.map((game) => (
    <GameCard image={game.background_image} alt={game.name} key={game.id} />
  ));

  return (
    <section className={styles.container}>
      {GamesList}
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
    </section>
  );
};

export default NewAndTrending;
