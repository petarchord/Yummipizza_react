import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import { fetchData } from "../../api";
import Loader from "../Common/Loader";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMenu(await fetchData());
    };

    fetchAPI();
  }, [setMenu]);

  if (menu.length === 0) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {menu.map((menuitem) => (
        <MenuItem
          key={menuitem.id}
          id={menuitem.id}
          name={menuitem.name}
          price={menuitem.price}
          image={menuitem.image}
        />
      ))}
    </div>
  );
};

export default Menu;
