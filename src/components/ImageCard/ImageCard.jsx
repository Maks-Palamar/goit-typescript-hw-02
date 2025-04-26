import React from 'react'
import css from './ImageCard.module.css'

const ImageCard = ({ modalData, onClick}) => {
  // console.log("imageCardData", modalData);
  return (
        <img className={css.oneImg} src={modalData.urls.small} alt={modalData.alt_description} onClick={() => onClick(modalData.urls.regular, modalData.alt_description)}/>
  )
}

export default ImageCard