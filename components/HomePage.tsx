"use client";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Logo from "../assets/Logo.svg";
import LogoText from "../assets/LogoText.svg";
import Search from "./Search";
const HomePage = () => {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <Image src={LogoText} alt="" className={styles.logo} />
        <div className={styles.search_desktop}>
          <Search />
        </div>
      </header>
      <section>
        <h1 className={styles.hero_text}>
          Discover new <br />
          games for <br />
          your <br />
          collection
        </h1>
      </section>
      <section className={styles.search_mobile}>
        <Search />
      </section>
      <section className={styles.browse}>
        <span className={styles.browse_card}>TAGS</span>
        <span className={styles.browse_card}>TAGS</span>
        <span className={styles.browse_card}>TAGS</span>
        <span className={styles.browse_card}>TAGS</span>
      </section>
    </main>
  );
};

export default HomePage;
