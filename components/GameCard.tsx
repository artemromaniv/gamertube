import Image from "next/image";
import Link from "next/link"; 
import { GameInfoProps } from "../types/GameInfoProps";
import styles from "../styles/NewAndTrending.module.css";


const GameCard = ({ image,name,genres, id }: GameInfoProps) => {
  return (
    <Link href={`${id}`} className={styles.game_card}>
      <div className={styles.game_poster_container}>
        <Image
          src={image}
          alt=""
          fill
          sizes="100%"
          className={styles.game_poster}
        />
      </div>
      <div className={styles.game_poster_info}>
        <span className={styles.game_poster_name}>{name}</span>
        <div className={styles.genres_container}>
          {genres?.map((genre) => (
            <div className={styles.genre_badge} key={genre.id}>{genre.name}</div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
