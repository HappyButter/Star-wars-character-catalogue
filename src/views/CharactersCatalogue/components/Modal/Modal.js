import React from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ExitIcon,
  Line,
} from './modal.css';

const Modal = ({ children }) => {
  const history = useHistory();

  const handleCloseModal = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return createPortal(
    <ModalWrapper onClick={handleCloseModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <button
            onClick={handleCloseModal}
            style={{
              backgroundColor: 'transparent',
              padding: 0,
              border: 'none',
              background: 'none',
            }}>
            <ExitIcon>
              <Line></Line>
              <Line></Line>
              <Line></Line>
            </ExitIcon>
          </button>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  );
};

export default Modal;
