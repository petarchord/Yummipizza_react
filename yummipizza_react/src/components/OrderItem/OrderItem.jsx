import React from "react";
import styles from "./OrderItem.module.css";

const OrderItem = ({ id, name, price, quantity }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu_item}>
        <button id={styles.remove_btn}>x</button>
        <div className={styles.menu_item_img}>
          <img
            src="https://cdn.donesi.rs/cdn-cgi/image/w=800,h=450,fit=cover,q=100,f=auto/restaurants/2068/banner_item/0000000168600"
            alt=""
          />
        </div>
        <div className={styles.menu_item_info}>
          <h3>{name}</h3>
          <p>{price}€</p>
        </div>
        <div className={styles.quantity}>
          {/* <button
            onClick={() => {
              incrementQuantity(id);
            }}
          >
            +
          </button> */}
          <p>x{quantity}</p>
          {/* <button
            onClick={() => {
              decrementQuantity(id);
            }}
            disabled={quantity <= 1 ? true : false}
          >
            -
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
