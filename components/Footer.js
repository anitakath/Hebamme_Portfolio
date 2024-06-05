import Link from 'next/link';



//STYLES
import styles from '../styles/Footer.module.css'


function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p> © 2023 Anne-Kathrin Wagner | Alle Rechte vorbehalten </p>
      <div className={styles.footerInformation}>
        <Link href="/datensicherheit" className={styles.dataprivacyLink}>
          Datenschutz
        </Link>
        |
        <Link href="/impressum" className={styles.dataprivacyLink}>
          Impressum
        </Link>
      </div>
    </div>
  );
}

export default Footer;