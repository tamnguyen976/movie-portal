// src/components/MovieCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h3 className={styles.title}>{movie.title}</h3>
      <p className={styles.detail}>
        <strong>Release Year:</strong> {movie.release_date && movie.release_date.split('-')[0]}
      </p>
      <p className={styles.detail}>
        <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
      </p>
    </div>
  );
};

export default MovieCard;
