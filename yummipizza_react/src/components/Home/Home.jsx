import React from "react";
import styles from "./Home.module.css";
import Menu from "../Menu/Menu";
import ShopingCart from "../ShopingCart/ShopingCart";

const Home = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <ShopingCart />
    </div>
  );
};

export default Home;
