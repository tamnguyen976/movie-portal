// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import styles from './Home.module.css'; // Import CSS module

import { fetchMovies } from '../services/tmdbService';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies({ searchTerm, selectedGenre, page: currentPage });
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchData();
  }, [searchTerm, selectedGenre, currentPage]);

  // Dummy genres data if needed (or fetch from API)
  useEffect(() => {
    setGenres([
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
      // Add more genres as required
    ]);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movie Portal</h1>
      <div className={styles.controls}>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <Filter genres={genres} selectedGenre={selectedGenre} onSelectGenre={handleGenreSelect} />
      </div>
      <MovieList movies={movies} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default Home;
