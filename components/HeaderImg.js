

//STYLES
import mobileImg from './mobileImg.jpg'
import Image from "next/image";
import styles from '../styles/HeaderImg.module.css'

const HeaderImg = () =>{
    return (
      <div className={styles.imageContainer}>
        <Image
          src={mobileImg}
          alt="Shaana Brown D. Näckler"
          className={styles.image}
        ></Image>
      </div>
    );
}

export default HeaderImg