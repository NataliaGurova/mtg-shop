import Modal from 'react-modal';
import css from './ModalWindow.module.css';
// import { useState } from 'react';
import { useEffect } from 'react';

import { BsXLg } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";



Modal.setAppElement('#root');

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add(css.modalOpen);
    } else {
      document.body.classList.remove(css.modalOpen);
    }
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modalWindow}
      style={{
        overlay: {
          backgroundColor: 'rgba(47, 47, 47, 0.6)',
        },
      }}
    >
      <div className={css.modalContainer}>
        <button type="button" onClick={onCloseModal} className={css.btnClose}>
          <LiaTimesSolid size={26} />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;