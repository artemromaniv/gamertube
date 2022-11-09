import Link from "next/link";
import styles from "../styles/Browse.module.css";
const BrowseSection = () => {
  return (
    <section className={styles.container}>
      <Link href={'/best'} className = {styles.card}>
        <span>BEST</span>
      </Link>
      <Link href={'/tags'} className = {styles.card}>
        <span>TAGS</span>
      </Link>
      <Link href={'/new'} className = {styles.card}>
        <span>NEW RELEASES</span>
      </Link>
      <Link href={'/genres'} className = {styles.card}>
        <span>GENRES</span>
      </Link>
    </section>
  );
};

export default BrowseSection;