import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = movies => {
  console.log(movies);
  return movies.map(movie => (
    <li key={movie.id}>
      <Link to={`movies/${movie.id}`}>
        {(movie.name && movie.name) || movie.title}
      </Link>
    </li>
  ));
};

export default MoviesList;
