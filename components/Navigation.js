import React, {useState} from "react";
//COMPONENTS
import NavLink from "./NavLink";
//STYLES
import styles from '../styles/Navigation.module.css'
import Modal from './NavigationModal'
import '../utils/fontawesome'
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [showNavigationModal, setShowNavigationModal] = useState(false);
  const mobileNavigationHandler = () => {
    setShowNavigationModal(true);
  };

  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.navigation}>
        <li>
          <NavLink href="/ueber-mich">ÜBER MICH</NavLink>
        </li>
        <li>
          <NavLink href="/meine-dienstleistungen">
            MEINE DIENSTLEISTUNGEN
          </NavLink>
        </li>
        <li>
          <NavLink href="/kontakt">KONTAKT</NavLink>
        </li>
        <li>
          <NavLink href="/">STARTSEITE</NavLink>
        </li>
      </ul>

      <div className={styles.mobileNav}>
        {!showNavigationModal && (
          <FontAwesomeIcon
            className={styles.menuBar}
            icon={faBars}
            onClick={mobileNavigationHandler}
          />
        )}
       
      </div>

      {showNavigationModal && (
          <Modal showNavigationModal={showNavigationModal} setShowNavigationModal={setShowNavigationModal}></Modal>
        )}
    </nav>
  );
};

export default Navigation;