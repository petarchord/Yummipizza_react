import React, { useState, useContext } from "react";
import styles from "./ShopingCart.module.css";
import OrderModal from "../Modals/OrderModal";
import { GlobalContext } from "../../context/GlobalState";

const ShopingCart = () => {
  const { bill } = useContext(GlobalContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <OrderModal open={modalIsOpen} setModal={setModalIsOpen} bill={bill} />
      <div className={styles.shoping_cart}>
        <h3>Your shoping cart</h3>
        <p>Your bill in US dollars: {(bill * 1.17798).toFixed(2)}$</p>
        <p>Your bill in Euros: {bill}€</p>
        <button
          onClick={() => {
            setModalIsOpen(true);
          }}
          disabled={bill <= 0 ? true : false}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ShopingCart;
