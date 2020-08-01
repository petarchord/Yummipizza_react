import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu_item}>
        <div className={styles.menu_item_img}>
          <img
            src="https://cdn.donesi.rs/cdn-cgi/image/w=800,h=450,fit=cover,q=100,f=auto/restaurants/2068/banner_item/0000000168600"
            alt=""
          />
        </div>
        <div className={styles.menu_item_info}>
          <h3>Name of pizza</h3>
          <p>Price of pizza</p>
          <button>Add to shoping cart</button>
        </div>
        <div className={styles.quantity}>
          <button>+</button>
          <p>2</p>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
