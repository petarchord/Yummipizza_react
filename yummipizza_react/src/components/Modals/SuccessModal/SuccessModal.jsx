import React from "react";
import styles from "./SuccessModal.module.css";
import Modal from "react-modal";
const SuccessModal = ({ successOpen, setSuccessModal, error }) => {
  return (
    <div className={styles.container}>
      <Modal
        isOpen={successOpen}
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
        {error === "" ? (
          <div className={styles.success_content}>
            <img
              src="https://img.icons8.com/officel/16/000000/checked.png"
              alt="success-img"
            />
            <p>You successfully ordered your food. Buon appetito!</p>
            <button
              onClick={() => {
                setSuccessModal(false);
              }}
            >
              Okay
            </button>
          </div>
        ) : (
          <div className={styles.success_content}>
            <div>{error}</div>
            <button
              onClick={() => {
                setSuccessModal(false);
              }}
            >
              Okay
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SuccessModal;
