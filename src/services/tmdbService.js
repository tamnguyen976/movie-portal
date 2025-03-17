// src/services/tmdbService.js

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Fetch movies from TMDB.
 * If a search term is provided, use the search endpoint.
 * Otherwise, fetch top-rated movies.
 * Optionally filters movies by genre.
 *
 * @param {Object} params
 * @param {string} params.searchTerm - The term to search for.
 * @param {string} params.selectedGenre - Genre ID for filtering.
 * @param {number} params.page - The page number for pagination.
 * @returns {Promise<Object>} The data returned from the API.
 */
export async function fetchMovies({ searchTerm = "", selectedGenre = "", page = 1 }) {
  try {
    let endpoint = "";
    if (searchTerm) {
      endpoint = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        searchTerm
      )}&page=${page}`;
    } else {
      endpoint = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`;
    }

    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    // Filter by genre if one is selected
    if (selectedGenre) {
      data.results = data.results.filter((movie) =>
        movie.genre_ids.includes(Number(selectedGenre))
      );
    }

    return data;
  } catch (error) {
    console.error("Error in fetchMovies:", error);
    // Return an empty result structure to maintain consistency
    return { results: [], total_pages: 1 };
  }
}

/**
 * Fetch detailed information for a specific movie.
 *
 * @param {number|string} movieId - The ID of the movie.
 * @returns {Promise<Object|null>} The movie details or null if an error occurs.
 */
export async function fetchMovieDetails(movieId) {
    try {
      const endpoint = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      return await response.json();
    } catch (error) {
      console.error("Error in fetchMovieDetails:", error);
      return null;
    }
  }
  
