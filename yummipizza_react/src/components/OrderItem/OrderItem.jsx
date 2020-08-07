import React, { useContext } from "react";
import styles from "./OrderItem.module.css";
import { GlobalContext } from "../../context/GlobalState";

const OrderItem = ({ id, name, price, image, quantity }) => {
  const { removeOrderItem } = useContext(GlobalContext);
  const imageUrl = `https://yummi-pizza-laravel.herokuapp.com/storage/pizzas/${image}`;
  const onRemoveItem = () => {
    const item = {
      id,
      name,
      price,
      quantity,
    };
    removeOrderItem(item);
  };
  return (
    <div className={styles.container}>
      <div className={styles.menu_item}>
        <button
          onClick={() => {
            onRemoveItem();
          }}
          id={styles.remove_btn}
        >
          x
        </button>
        <div className={styles.menu_item_img}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.menu_item_info}>
          <h3>{name}</h3>
          <p>{price}€</p>
        </div>
        <div className={styles.quantity}>
          <p>x{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
