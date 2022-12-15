import Image, { StaticImageData } from "next/image";

import styles from "../styles/NewAndTrending.module.css";

type Props = {
  name?: string;
  image: string;
  alt: string;
};

const GameCard = ({ image, alt }: Props) => {
  return (
    <div className={styles.game_card}>
      <div className={styles.game_poster_container}>
        <Image src={image} alt="" fill  className={styles.game_poster} />
      </div>
      <div>
        <span>{alt}</span>
      </div>
    </div>
  );
};

export default GameCard;
