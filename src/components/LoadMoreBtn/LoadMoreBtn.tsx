import React from 'react';
import css from './LoadMore.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.loadBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
