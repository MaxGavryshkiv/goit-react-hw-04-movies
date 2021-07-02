import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, location, query }) => {
  return (
    <>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: { from: location, query: query },
            }}
          >
            {(movie.name && movie.name) || movie.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default withRouter(MoviesList);
