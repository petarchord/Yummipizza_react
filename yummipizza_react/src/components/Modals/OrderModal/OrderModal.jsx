import React, { useState } from "react";
import styles from "./OrderModal.module.css";
import Modal from "react-modal";
import SuccessModal from "../SuccessModal/SuccessModal";
import { orderApi } from "../../../api";

Modal.setAppElement("#root");
const OrderModal = ({ open, setModal, bill }) => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const deliveryDollars = (10 * 1.17798).toFixed(2);
  const orderSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      address,
      phone,
      bill,
    };
    await orderApi(data);
    setModal(false);
    setSuccessModalIsOpen(true);
  };
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
        <form
          onSubmit={(e) => {
            orderSubmit(e);
          }}
        >
          <div className={styles.input_group}>
            <div className={styles.name_field}>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className={styles.address_field}>
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                name="address"
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className={styles.phone_field}>
              <label htmlFor="phone">Phone: </label>
              <input
                type="number"
                name="phone"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
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
      <SuccessModal
        successOpen={successModalIsOpen}
        setSuccessModal={setSuccessModalIsOpen}
      ></SuccessModal>
    </div>
  );
};

export default OrderModal;
