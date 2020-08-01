import React from "react";
import styles from "./OrderModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const OrderModal = ({ open, setModal }) => {
  console.log(open);
  console.log(setModal);
  return (
    <div className={styles.container}>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <h3>Enter your information</h3>
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          x
        </button>
        <form action="">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" />
          </div>
          <div>
            <label htmlFor="phone">Address</label>
            <input type="number" name="phone" />
          </div>
          <input type="submit" value="Confirm your order" />
        </form>
      </Modal>
    </div>
  );
};

export default OrderModal;
