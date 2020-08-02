import React, { useState, useContext } from "react";
import styles from "./ShopingCart.module.css";
import OrderModal from "../Modals/OrderModal/OrderModal";
import Order from "../Order/Order";
import { GlobalContext } from "../../context/GlobalState";
import CountUp from "react-countup";

const ShopingCart = () => {
  const { bill } = useContext(GlobalContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <OrderModal open={modalIsOpen} setModal={setModalIsOpen} bill={bill} />
      <div className={styles.shoping_cart}>
        <h3>Your shoping cart</h3>
        <Order />
        <p>
          Your bill in US dollars:{" "}
          <CountUp
            start={0}
            end={(bill * 1.17798).toFixed(2)}
            duration={1.5}
            separator={"."}
            decimals={2}
          />
          $
        </p>
        <p>
          Your bill in Euros: <CountUp start={0} end={bill} duration={1.5} />€
        </p>
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
