import React from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Photo } from '../../fetchCards'; // Імпортуємо Photo

interface ImageGalleryProps {
  cards: Photo[];
  openModal: (cardData: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ cards, openModal }) => {
  return (
    <ul className={css.gallery}>
      {cards.map((card) => (
        <li key={card.id} className={css.galleryItem}>
          <ImageCard modalData={card} onClick={() => openModal(card)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
