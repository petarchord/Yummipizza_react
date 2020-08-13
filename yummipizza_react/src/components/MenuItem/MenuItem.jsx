import React, { useContext, useState } from "react";
import styles from "./MenuItem.module.css";
import { GlobalContext } from "../../context/GlobalState";

const MenuItem = ({ id, name, price, image }) => {
  const [quantity, setQuantity] = useState(1);
  const imageUrl = `https://yummi-pizza-laravel.herokuapp.com/storage/pizzas/${image}`;
  const { increaseBill, addOrderItem } = useContext(GlobalContext);

  const AddToShopingCart = () => {
    const bill = quantity * price;
    increaseBill(bill);
    const menuItem = {
      id,
      name,
      price,
      image,
      quantity,
    };
    addOrderItem(menuItem);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu_item}>
        <div className={styles.menu_item_img}>
          <img src={imageUrl} alt="" />
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
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              setQuantity(quantity - 1);
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
