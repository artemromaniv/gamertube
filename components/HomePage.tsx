"use client";

import styles from "../styles/Home.module.css";

import Search from "./Search";
import BrowseSection from "./BrowseSection";
import NewAndTrending from "./NewAndTrending";
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
      <BrowseSection />
      <h2>New and Trending</h2>
      <NewAndTrending />
    </main>
  );
};

export default HomePage;
