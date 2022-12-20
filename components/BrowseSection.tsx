import Link from "next/link";
import styles from "../styles/Browse.module.css";
import { Award } from "react-feather";
import BrowseCard from "./BrowseCard";
const BrowseSection = () => {
  return (
    <section className={styles.container}>
      <BrowseCard
        image="https://cdn.cloudflare.steamstatic.com/steam/apps/347800/capsule_616x353.jpg?t=1667490869"
        link="/new"
        icon={<Award />}
        category="new releases"
      />
      <BrowseCard
        image="https://cdn.cloudflare.steamstatic.com/steam/apps/347800/capsule_616x353.jpg?t=1667490869"
        link="/tags"
        icon={<Award />}
        category="tags"
      />
      <BrowseCard
        image="https://cdn.cloudflare.steamstatic.com/steam/apps/347800/capsule_616x353.jpg?t=1667490869"
        link="/genres"
        icon={<Award />}
        category="genres"
      />
      <BrowseCard
        image="https://cdn.cloudflare.steamstatic.com/steam/apps/347800/capsule_616x353.jpg?t=1667490869"
        link="/best"
        icon={<Award />}
        category="best"
      />
    </section>
  );
};

export default BrowseSection;
