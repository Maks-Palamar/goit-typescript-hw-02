import React, { useState, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
    const formSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const query = form.elements.query.value;
        if (form.elements.query.value.trim() === "") {
            toast.error("Please, enter search query")
            return;
        }
        onSubmit(query)
        console.log(query);
        form.reset()
    }
    
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos > currentScrollPos;

        setIsHeaderVisible(isScrollingUp);

        setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

  return (
      <header className={css.header}
      style={{ position: 'fixed', top: isHeaderVisible ? 0 : '-100px', left: 0, width: '100%', transition: 'top 0.3s ease-in-out', backgroundColor: 'lightgray' }}>
        <div><Toaster position="bottom-center" reverseOrder={false}/></div>
        <form onSubmit={formSubmit} className={css.form}>
            <input className={css.formInpt}
            type="text"
            autoComplete="off"
            autoFocus
                  placeholder="Search images and photos"
                  name="query"
            />
            <button className={css.formBtn} type="submit">Search</button>
        </form>
    </header>

  )
}

export default SearchBar