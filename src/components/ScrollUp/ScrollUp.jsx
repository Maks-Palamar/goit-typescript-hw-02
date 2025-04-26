import React from 'react'
import css from './ScrollUp.module.css'

const ScrollUp = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  return (
    <button onClick={scrollToTop} className={css.scrollBtn}>Up</button>
  )
}

export default ScrollUp