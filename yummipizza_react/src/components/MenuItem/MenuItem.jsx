import React, { useContext } from "react";
import styles from "./MenuItem.module.css";
import { GlobalContext } from "../../context/GlobalState";

const MenuItem = ({ id, name, price, quantity }) => {
  const { incrementQuantity, decrementQuantity, increaseBill } = useContext(
    GlobalContext
  );

  const AddToShopingCart = () => {
    const bill = quantity * price;
    increaseBill(bill);
  };

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
          <h3>{name}</h3>
          <p>{price}€</p>
          <button
            onClick={() => {
              AddToShopingCart();
            }}
          >
            Add to shoping cart
          </button>
        </div>
        <div className={styles.quantity}>
          <button
            onClick={() => {
              incrementQuantity(id);
            }}
          >
            +
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              decrementQuantity(id);
            }}
            disabled={quantity <= 1 ? true : false}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
