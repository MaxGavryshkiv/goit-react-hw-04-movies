import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

import '../../styles/movieList.scss';

const MoviesList = ({ movies, location }) => {
  const imgPath = 'https://image.tmdb.org/t/p/w300';
  return (
    <>
      <div className="movie-list__div">
        <ul className="movie-list__ul">
          {movies.map(movie => (
            <LinkContainer
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <li key={movie.id} className="movie-list__ul-li">
                <div className="movie-list__ul-li-div">
                  <img
                    alt=""
                    className="movie-list__img"
                    src={`${imgPath}${movie.poster_path}`}
                  />
                  <h5>{(movie.name && movie.name) || movie.title}</h5>
                </div>
              </li>
            </LinkContainer>
          ))}
        </ul>
      </div>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
