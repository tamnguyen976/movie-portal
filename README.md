# Movie Portal

A movie portal built with React that allows users to browse and search for top-rated movies using the TMDB API. The application includes features such as search, genre filtering, pagination, and detailed movie information displayed using React Portals.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Development Process & Challenges](#development-process--challenges)
- [Future Improvements](#future-improvements)
- [License](#license)

## Overview

The Movie Portal is a single-page application that displays a list of top-rated movies retrieved from the TMDB API. Users can search for movies by title, filter movies by genre, navigate through pages of results, and view detailed information about a selected movie—including the cast, plot summary, release year, and rating. The movie details are rendered using React Portals.

## Features

- **Search Functionality:** Search movies by title.
- **Genre Filtering:** Filter movies based on the selected genre.
- **Pagination:** Navigate through multiple pages of movie listings.
- **Movie Details Page:** Detailed view of a selected movie with additional information such as cast and overview.
- **Responsive Design:** Clean and responsive UI using CSS Modules.
- **React Portals:** Implementation of React Portals for the movie details view.

## Technologies Used

- **React:** For building the user interface.
- **React Router:** For client-side routing.
- **React Portals:** For rendering the movie details overlay.
- **CSS Modules:** For component-specific styling.
- **TMDB API:** To retrieve movie data.
- **JavaScript (ES6+):** For application logic.

## Installation

1. **Clone the repository:**
   git clone https://github.com/your-username/movie-portal.git

2. **Navigate to the project directory:**
   cd movie-portal

3. **Install dependencies:**
   npm install

4. **Start the development server:**
   npm start

5. Open your browser and navigate to http://localhost:3000.

## Usage

- **Home Page:**
  - Browse the list of top-rated movies.
  - Use the search bar to find specific movies.
  - Use the genre dropdown to filter movies.
  - Use pagination to navigate through different pages.
  
- **Movie Details Page:**
  - Click on any movie card to view detailed information.
  - The movie details are displayed using a React Portal.
  - Click the "Back" button to return to the home page.

## Development Process & Challenges

- **Project Setup:**
  - Created the project using Create React App.
  - Configured routing with React Router and integrated CSS Modules.
  
- **API Integration:**
  - Integrated the TMDB API to fetch movie data.
  - Implemented search, filtering, and pagination by dynamically constructing API requests.
  
- **Component Design:**
  - Developed reusable components such as SearchBar, Filter, MovieCard, MovieList, and Pagination.
  
- **React Portals:**
  - Implemented the movie details view using React Portals for an overlay experience.
  - Adjusted modal styling as needed to fulfill project requirements.
  
- **Challenges:**
  - Managing state for search, filtering, and pagination.
  - Ensuring responsive design across various devices.
  - Fetching and displaying additional details (like cast) from the TMDB API.

## Future Improvements

- Enhance filtering functionality to support multi-genre selection.
- Improve error handling and add a loading indicator during API calls.
- Add unit tests for critical components.
- Optimize performance for a smoother user experience.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
