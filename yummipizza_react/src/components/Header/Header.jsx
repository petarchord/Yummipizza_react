import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <h1>Yummi Pizza</h1>
      </div>
    </header>
  );
};

export default Header;
