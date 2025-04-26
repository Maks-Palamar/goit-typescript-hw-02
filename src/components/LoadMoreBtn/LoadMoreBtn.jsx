import React from 'react'
import css from './LoadMore.module.css'

const LoadMoreBtn = ({onClick}) => {

    // const handleClick = () => { 
    //     console.log("clicked");
    // }

  return (
    <button type='button' onClick={onClick} className={css.loadBtn}>Load more</button>
  )
}

export default LoadMoreBtn