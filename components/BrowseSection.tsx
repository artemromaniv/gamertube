import Link from "next/link";
import styles from "../styles/Browse.module.css";
import { Award } from "react-feather";
import Ghostsong from "../assets/GhostSong.jpg";
import HollowKnight from "../assets/HollowKnight.jpg";
const BrowseSection = () => {
  return (
    <section className={styles.container}>
      <Link
        href={"/best"}
        className={styles.card}
        style={{
          backgroundImage: `url(${Ghostsong.src})`,
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      >
        <div className={styles.card_items}>
          <Award width={45} height={45} />
          <span>BEST</span>
        </div>
      </Link>
      <Link
        href={"/tags"}
        className={styles.card}
        style={{
          backgroundImage: `url(${HollowKnight.src})`,
          maxWidth: "100%",
          objectFit: "none",
        }}
      >
        <span>TAGS</span>
      </Link>
      <Link href={"/new"} className={styles.card}>
        <span>NEW RELEASES</span>
      </Link>
      <Link href={"/genres"} className={styles.card}>
        <span>GENRES</span>
      </Link>
    </section>
  );
};

export default BrowseSection;
