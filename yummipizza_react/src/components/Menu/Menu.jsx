import React, { useContext, useState, useEffect } from "react";
import styles from "./Menu.module.css";
import { fetchData } from "../../api";

import MenuItem from "../MenuItem/MenuItem";
import { GlobalContext } from "../../context/GlobalState";

const Menu = () => {
  // let { menu, fetchMenu } = useContext(GlobalContext);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      // console.log();
      setMenu(await fetchData());
    };

    fetchAPI();
  }, [setMenu]);

  if (menu.length === 0) {
    return "...";
  }

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
