import Navigation from "./Navigation";


//STYLES
import styles from '../styles/Header.module.css'


function Header() {
  return (
    <div className={styles.headerNavigation}>
      <h1 className={styles.headerTitle}> Shaana Brown Näckler, Hebamme</h1>
      <Navigation />
    </div>
  );
}

export default Header;