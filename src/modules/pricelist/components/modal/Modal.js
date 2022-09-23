import React from "react";
import "./Modal..scss";

const Modal = ({show, title, onClose, loading, children}) => {
    if (!show) return null;
    return (
        <div>
            <div className="modal-overlay" onClick={onClose}/>
            <div className="main-modal">
                <div className="modal">
                    {!loading && (
                        <>
                            <div className="modal-header">
                                <h5 className="heading">{title}</h5>
                            </div>
                            <button className="modal-close" onClick={onClose}>
                                &times;
                            </button>
                        </>
                    )}
                    <div className="modal-content">
                        <div className={`modal-loading ${loading ? 'show': 'hide'}`}>
                            <div className="loading"/>
                            <h3>Loading...</h3>
                        </div>
                        <div style={{display: loading ? 'none' : 'inherit'}}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
