import Starfield from "../assets/Starfield.jpg";
import Image from "next/image";
import styles from "../styles/NewAndTrending.module.css";
const NewAndTrending = () => {
  return (
    <section className={styles.container}>
      <div>
        <Image src={Starfield} alt="starfield" className={styles.image} />
      </div>
      <div>
        <Image src={Starfield} alt="starfield" className={styles.image}/>
      </div>
      <div>
        <Image src={Starfield} alt="starfield" className={styles.image}/>
      </div>
    </section>
  );
};

export default NewAndTrending;
