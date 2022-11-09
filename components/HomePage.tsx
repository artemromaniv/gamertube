"use client";

import styles from "../styles/Home.module.css";

import Search from "./Search";
import BrowseSection from "./BrowseSection";
const HomePage = () => {
  return (
    <main className={styles.wrapper}>
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
      <BrowseSection/>
    </main>
  );
};

export default HomePage;
