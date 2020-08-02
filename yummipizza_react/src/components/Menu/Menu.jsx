import React, { useContext } from "react";
import styles from "./Menu.module.css";

import MenuItem from "../MenuItem/MenuItem";
import { GlobalContext } from "../../context/GlobalState";

const Menu = () => {
  const { menu } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      {menu.map((menuitem) => (
        <MenuItem
          key={menuitem.id}
          id={menuitem.id}
          name={menuitem.name}
          price={menuitem.price}
          quantity={menuitem.quantity}
        />
      ))}
    </div>
  );
};

export default Menu;
