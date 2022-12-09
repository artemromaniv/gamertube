import Image from "next/image";
import styles from "../styles/NewAndTrending.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchGamesData } from "../api/fetchGamesData";

const NewAndTrending = () => {
  const { data, isLoading, error } = useQuery(["trending"], () =>
    fetchGamesData("games")
  );
  !error ? console.log(data) : console.log(error);
  return <section className={styles.container}></section>;
};

export default NewAndTrending;
