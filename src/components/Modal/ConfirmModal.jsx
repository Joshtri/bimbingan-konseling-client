// ConfirmModal.js
import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, message, titleModal }) => {
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{titleModal}</p>
                    <button className="delete" aria-label="close" onClick={onClose}></button>
                </header>
                <section className="modal-card-body">
                    <p>{message}</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={onConfirm}>Yes, Confirm</button>
                    <button className="button" onClick={onClose}>Cancel</button>
                </footer>
            </div>
        </div>
    );
};

export default ConfirmModal;
