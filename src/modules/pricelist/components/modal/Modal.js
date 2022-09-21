import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ show, title, onClose, children }) => {
    if (!show) return null;
    return (
        <div>
            <div className={styles.darkBG} onClick={onClose} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>{title}</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose}>
                        &times;
                    </button>
                    <div className={styles.modalContent}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
