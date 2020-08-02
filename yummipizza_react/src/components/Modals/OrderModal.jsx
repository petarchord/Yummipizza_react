import React from "react";
import styles from "./OrderModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const OrderModal = ({ open, setModal, bill }) => {
  const deliveryDollars = (10 * 1.17798).toFixed(2);
  return (
    <div className={styles.container}>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setModal(false);
        }}
        // className={styles.portal}
        // overlayClassName={styles.overlay_modal}
        style={{
          overlay: {
            position: "fixed",
            height: "80%",
            width: "50%",
            top: "5%",
            left: "25%",
            backgroundColor: "rgba(255,255,255,1,0)",
            textAlign: "center",
          },
          content: {
            position: "absolute",
            textAlign: "center",
            padding: "10px",
            margin: "20px",
          },
        }}
      >
        <h3 id={styles.heading_modal}>Enter your information</h3>
        <button
          onClick={() => {
            setModal(false);
          }}
          id={styles.cancel_button}
        >
          x
        </button>
        <form action="">
          <div className={styles.input_group}>
            <div className={styles.name_field}>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" />
            </div>
            <div className={styles.address_field}>
              <label htmlFor="address">Address: </label>
              <input type="text" name="address" />
            </div>
            <div className={styles.phone_field}>
              <label htmlFor="phone">Phone: </label>
              <input type="number" name="phone" />
            </div>
            <div className={styles.bill}>
              <p>Delivery costs in US Dollars: {parseFloat(deliveryDollars)}</p>
              <p>Delivery costs in Euros: 10€</p>
              <p>
                Your total bill in US dollars:
                {bill + parseFloat(deliveryDollars)}$!
              </p>
              <p>Your total bill in Euros: {bill + 10}€!</p>
            </div>
            <input
              type="submit"
              value="Confirm your order"
              id={styles.submit}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default OrderModal;
