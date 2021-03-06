import React, { useState, useContext } from "react";
import styles from "./OrderModal.module.css";
import Modal from "react-modal";
import Loader from "../../Common/Loader";
import SuccessModal from "../SuccessModal/SuccessModal";
import { orderApi } from "../../../api";
import { GlobalContext } from "../../../context/GlobalState";
Modal.setAppElement("#root");
const OrderModal = ({ open, setModal, bill, billDollars }) => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const { order } = useContext(GlobalContext);
  const orders = [];
  order.forEach((item) => {
    orders.push({ id: item.id, quantity: item.quantity });
  });

  const deliveryDollars = (10 * 1.17798).toFixed(2);
  const totalBillEuros = bill + 10;
  const totalBillDollars =
    parseFloat(billDollars) + parseFloat(deliveryDollars);
  const orderSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      address,
      phone,
      bill: totalBillEuros,
      orders,
    };
    setLoader(true);
    let status = await orderApi(data);
    if (status !== 200) {
      setError("Something went wrong. Please try again later");
    }
    setLoader(false);
    setModal(false);
    setSuccessModalIsOpen(true);
  };
  const restrictCharacters = (e) => {
    if (
      (e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      if (e.keyCode !== 8 && e.keyCode !== 107 && e.keyCode !== 9) {
        e.preventDefault();
      }
    }
  };

  const restrictDigits = (e) => {
    if (
      (e.keyCode < 65 || e.keyCode > 90) &&
      e.keyCode !== 8 &&
      e.keyCode !== 32 &&
      e.keyCode !== 16 &&
      e.keyCode !== 9
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setModal(false);
        }}
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
        {loader ? (
          <div className={styles.loader_wrapper}>
            <Loader />
          </div>
        ) : (
          ""
        )}
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
                onKeyDown={(e) => {
                  restrictDigits(e);
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
                type="text"
                name="phone"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                onKeyDown={(e) => {
                  restrictCharacters(e);
                }}
              />
            </div>
            <div className={styles.bill}>
              <p>
                Delivery costs in US Dollars: {parseFloat(deliveryDollars)}$
              </p>
              <p>Delivery costs in Euros: 10€</p>
              <p>
                Your total bill in US dollars:
                {totalBillDollars}$!
              </p>
              <p>Your total bill in Euros: {totalBillEuros}€!</p>
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
        error={error}
      ></SuccessModal>
    </div>
  );
};

export default OrderModal;
