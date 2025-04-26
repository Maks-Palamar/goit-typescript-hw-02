import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchCards, Photo } from './fetchCards'; // імпорт типу Photo
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ScrollUp from './components/ScrollUp/ScrollUp';

const App: React.FC = () => {
  const [cards, setCards] = useState<Photo[]>([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [oneCard, setOneCard] = useState<Photo | null>(null); // типізовано

  const handleSubmit = async (data: string) => {
    try {
      setCards([]);
      setQuery(data);
      setPage(1);
      setLoading(true);
      setOneCard(null);
      setModalIsOpen(false);
      scrollToTop();
    } catch {
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
        setCards((prevCards) => [...prevCards, ...reply.results]);
        setTotalPages(reply.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleLoadClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (cardData: Photo) => {
    setModalIsOpen(true);
    setOneCard(cardData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {cards.length > 0 && <ImageGallery cards={cards} openModal={openModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cards.length > 0 && totalPages !== page && !loading && <LoadMoreBtn onClick={handleLoadClick} />}
      {cards.length > 0 && <ImageModal modalData={oneCard} modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />}
      {cards.length > 0 && <ScrollUp />}
    </>
  );
};

export default App;
