import React, { useState } from "react";
import styles from "./ShopingCart.module.css";
import OrderModal from "../Modals/OrderModal";

const ShopingCart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <OrderModal open={modalIsOpen} setModal={setModalIsOpen} />
      <div className={styles.shoping_cart}>
        <h3>Your shoping cart</h3>
        <p>Your bill: 0$</p>
        <button
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ShopingCart;
