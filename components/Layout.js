import React from "react";
import Header from "./Header";
import Footer from "./Footer";


//STYLES
import styles from '../styles/Layout.module.css'
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layoutChildren}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
