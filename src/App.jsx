import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchCards } from './fetchCards'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import ScrollUp from './components/ScrollUp/ScrollUp'

function App() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [oneCard, setOneCard] = useState(null);

  const handleSubmit = async (data) => {
    try {
      setCards([]);
      setQuery(`${data}`);
      setPage(1); 
      setLoading(true);
      setOneCard(null);
      setModalIsOpen(false);
      scrollToTop();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  if (!query) return;

  const fetchData = async () => {
    try {
      setLoading(true);
      const reply = await fetchCards(query, page);
      // console.log("reply", reply);
      setCards(prevCards => [...prevCards, ...reply]);
      setTotalPages(reply.total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [query, page]);


const handleLoadClick = () => {
  setPage(prevPage => prevPage + 1);
}
  
  const openModal = (cardData) => {
    // console.log('data', cardData);
    setModalIsOpen(true);
    setOneCard(cardData);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {cards.length > 0 && <ImageGallery cards={cards} openModal={openModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cards.length > 0 && totalPages !== page && !loading && <LoadMoreBtn onClick={handleLoadClick} />}
      {cards.length > 0 && <ImageModal modalData={oneCard} modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}></ImageModal>}
      {cards.length > 0 && <ScrollUp />}
    </>
  )
}

export default App
