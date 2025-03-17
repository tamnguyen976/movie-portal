// src/components/Filter.js
import React from 'react';

const Filter = ({ genres, selectedGenre, onSelectGenre }) => {
  return (
    <select value={selectedGenre} onChange={(e) => onSelectGenre(e.target.value)}>
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
