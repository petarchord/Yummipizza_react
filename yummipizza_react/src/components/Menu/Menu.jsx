import React from "react";
import styles from "./Menu.module.css";

import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  return (
    <div className={styles.container}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
};

export default Menu;
