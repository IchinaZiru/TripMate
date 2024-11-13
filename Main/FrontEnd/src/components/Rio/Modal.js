import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div id="plan-modal" className="modal show">
            <div className="modal-content">
                <span className="close-button" onClick={closeModal}>
                    &times;
                </span>
                <h2>予定入力</h2>
                <form className="input-form">
                    {/* フォーム内容 */}
                </form>
            </div>
        </div>
    );
};

export default Modal;