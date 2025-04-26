import React from 'react';
import css from './ImageCard.module.css';

interface ImageCardProps {
  modalData: {
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  };
  onClick: (regularUrl: string, altDescription: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ modalData, onClick }) => {
  return (
    <img
      className={css.oneImg}
      src={modalData.urls.small}
      alt={modalData.alt_description}
      onClick={() => onClick(modalData.urls.regular, modalData.alt_description)}
    />
  );
};

export default ImageCard;
