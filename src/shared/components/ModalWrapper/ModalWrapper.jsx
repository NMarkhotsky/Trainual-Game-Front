import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../Icon/Icon';
import {
  BackDrop,
  ButtonCancel,
  ButtonCreate,
  ButtonWrapper,
  CloseBtn,
  Content,
  Modal,
} from './ModalWrapper.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalWrapper = ({ children, onClose }) => {
  document.body.style.overflow = 'hidden';

  const handleClose = useCallback(
    ({ target, currentTarget, code }) => {
      document.body.style.overflow = 'visible';

      if (target === currentTarget || code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return createPortal(
    <BackDrop onClick={handleClose}>
      <Modal>
        <CloseBtn type="button" onClick={onClose} aria-label="close">
          <Icon iconName="icon-cross" width="24px" height="24px" />
        </CloseBtn>
        <Content>{children}</Content>
        <ButtonWrapper>
          <ButtonCancel type="button" onClick={onClose}>
            Cancel
          </ButtonCancel>
          <ButtonCreate type="button">Create</ButtonCreate>
        </ButtonWrapper>
      </Modal>
    </BackDrop>,
    modalRoot
  );
};
