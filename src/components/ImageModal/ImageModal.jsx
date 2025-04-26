import React from 'react'
import { ModuleCacheMap } from 'vite/runtime'
import css from './ImageModal.module.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ImageModal = ({modalData, modalIsOpen, closeModal}) => {
    // console.log(urls.regular);
    // console.log(urls);
  return (
    <div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className={css.Modal}  
        >
            <div>
                  {modalData &&<img src={modalData.urls.regular} alt={modalData.alt_description} />}
            </div>
           
        </Modal>
    </div>
  )
}

export default ImageModal