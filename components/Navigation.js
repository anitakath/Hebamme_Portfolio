import React, {useState, useEffect} from "react";
import Link from "next/link";


//COMPONENTS
import NavLink from "./NavLink";


//STYLES
import styles from '../styles/Navigation.module.css'







const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.navigation}>
        <li>
          <NavLink href="/ueber-mich">Über mich</NavLink>
        </li>
        <li>
          <NavLink href="/meine-dienstleistungen">Meine Dienstleistungen</NavLink>
        </li>
        <li>
          <NavLink href="/kontakt">Kontakt</NavLink>
        </li>
        <li>
          <NavLink href="/">Startseite</NavLink>
        </li>
      </ul>


       <div className={styles.mobileNav}>

       </div>
      
    </nav>
  );
};

export default Navigation;