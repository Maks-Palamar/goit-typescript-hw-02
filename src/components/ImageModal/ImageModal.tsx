import React from 'react';
import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ImageModalProps {
  modalData: {
    urls: {
      regular: string;
    };
    alt_description: string;
  } | null;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ modalData, modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={css.Modal}
      >
        <div>
          {modalData && (
            <img src={modalData.urls.regular} alt={modalData.alt_description} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
