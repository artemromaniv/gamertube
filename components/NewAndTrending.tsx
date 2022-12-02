import Starfield from "../assets/Starfield.jpg";
import Image from "next/image";
import styles from "../styles/NewAndTrending.module.css";
import { useQuery } from "@tanstack/react-query";

const NewAndTrending = () => {

  const getGamesData = async () => {
      const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`);
      return res.json
  }

  const {data, error, isLoading} = useQuery({queryKey:['gamesData'],queryFn:getGamesData});

  return (
    <section className={styles.container}>
      {/* <div>
        <Image src={Starfield} alt="starfield" className={styles.image} />
      </div>
      <div>
        <Image src={Starfield} alt="starfield" className={styles.image}/>
      </div>
      <div>
        <Image src={Starfield} alt="starfield" className={styles.image}/>
      </div> */}

      <pre>
        {JSON.stringify(isLoading,null,4)}
      </pre>
    </section>
  );
};

export default NewAndTrending;
