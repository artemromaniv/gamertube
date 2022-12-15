import Image, { StaticImageData } from 'next/image'

import styles from '../styles/NewAndTrending.module.css'

type Props = {
    image:StaticImageData,
    alt:string
}

const GameCard = ({image,alt}:Props) => {
  return (
    <div className={styles.game_card}>
      <div className={styles.game_poster_container}>
        <Image src={image} alt="" height={293} className={styles.game_poster}/>
      </div>
        <div>
          <span>{alt}</span>
        </div>
    </div>
  )
}

export default GameCard