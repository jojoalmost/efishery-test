import React from "react";
import "./Modal..scss";

const Modal = ({ show, title, onClose, children }) => {
    if (!show) return null;
    return (
        <div>
            <div className="modal-overlay" onClick={onClose} />
            <div className="main-modal">
                <div className="modal">
                    <div className="modal-header">
                        <h5 className="heading">{title}</h5>
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
