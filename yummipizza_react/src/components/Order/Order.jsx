import React, { useContext } from "react";
import styles from "./Order.module.css";
import OrderItem from "../OrderItem/OrderItem";
import { GlobalContext } from "../../context/GlobalState";

const Order = () => {
  const { order } = useContext(GlobalContext);
  console.log(order);
  return (
    <div className={styles.container}>
      {order.map((orderItem) => (
        <OrderItem
          key={orderItem.id}
          name={orderItem.name}
          price={orderItem.price}
          quantity={orderItem.quantity}
        />
      ))}
    </div>
  );
};

export default Order;
