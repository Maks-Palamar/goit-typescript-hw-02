import React from 'react'
import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({ cards, openModal }) => {
  // console.log("Cards in ImageGallery:", cards);
  return (
    <ul className={css.gallery}>
      {cards.map((card) => (
        <li key={card.id} className={css.galleryItem}  >
          <ImageCard key={card.id} modalData={card} onClick={() => {
          openModal(card)
          // console.log('cardInsideLi',card)
        }}/>
        </li>
      ))}
    </ul>
  )
}

export default ImageGallery
