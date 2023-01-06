import Link from "next/link";
import styles from "./styles/Browse.module.css";
import { BrowseCardProps } from "../types/BrowseCard";

const BrowseCard = ({ link, image, icon, category }: BrowseCardProps) => {
  return (
    <Link
      href={link}
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(45deg, #000000 0%, rgba(0, 0, 0, 0)50%, #000000 100%), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.card_title}>
        {icon}
        <span>{category}</span>
      </div>
    </Link>
  );
};

export default BrowseCard;
