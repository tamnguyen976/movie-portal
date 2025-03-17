// src/pages/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { fetchMovieDetails } from '../services/tmdbService';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={() => navigate(-1)} className="close-button">
          Back
        </button>
        <h1>{movie.title}</h1>
        <p>
          <strong>Release Year:</strong>{' '}
          {movie.release_date && movie.release_date.split('-')[0]}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <p>{movie.overview}</p>
        <h3>Cast:</h3>
    <ul>
        {movie.credits.cast.slice(0, 5).map((actor) => (
        <li key={actor.cast_id}>
            {actor.name} as {actor.character}
        </li>
        ))}
    </ul>
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default MovieDetails;
