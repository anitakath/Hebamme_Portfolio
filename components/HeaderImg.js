

//STYLES
import mobileImg from "./Images/start.jpg";
import Image from "next/image";
import styles from '../styles/HeaderImg.module.css'

const HeaderImg = () =>{
    return (
      <div className={styles.imageContainer}>
        <Image
          src={mobileImg}
          alt="Shaana Brown D. Näckler"
          className={styles.image}
          priority={true}
        ></Image>
      </div>
    );
}

export default HeaderImg