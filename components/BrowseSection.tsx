import Link from "next/link";
import styles from "../styles/Browse.module.css";
import { Award } from "react-feather";
import Ghostsong from "../assets/GhostSong.jpg";
import HollowKnight from "../assets/HollowKnight.jpg";
import BrowseCard from "./BrowseCard";
const BrowseSection = () => {
  return (
    <section className={styles.container}>
      <BrowseCard image="https://cdn.cloudflare.steamstatic.com/steam/apps/347800/capsule_616x353.jpg?t=1667490869" link = "/new" icon = {<Award/>} category = "new"/>
      <BrowseCard image="https://cdn.cloudflare.steamstatic.com/steam/apps/347800/capsule_616x353.jpg?t=1667490869" link = "/new" icon = {<Award/>} category = "new"/>
      <BrowseCard image="https://cdn.cloudflare.steamstatic.com/steam/apps/347800/capsule_616x353.jpg?t=1667490869" link = "/new" icon = {<Award/>} category = "new"/>
      <BrowseCard image="https://cdn.cloudflare.steamstatic.com/steam/apps/347800/capsule_616x353.jpg?t=1667490869" link = "/new" icon = {<Award/>} category = "new"/>
    </section>
  );
};

export default BrowseSection;
