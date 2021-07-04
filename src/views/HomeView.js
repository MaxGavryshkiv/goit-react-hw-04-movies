import React, { Component } from 'react';

import movieApi from '../servises/movie-api';
import MoviesList from '../components/MoviesList';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await this.fetchTrends();
  }

  fetchTrends = () => {
    this.setState({ isLoading: true });

    movieApi
      .fetchTrends()
      .then(results => {
        this.setState(prevState => ({
          movies: [...results],
        }));
      })
      .catch(error => console.log)
      .finally(() => {
        // console.log('finish fetchTrends');
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>

        <ul>
          <MoviesList movies={movies} />
        </ul>
      </>
    );
  }
}

/* <MoviesList movies={movies} /> */

export default HomeView;

// import React from 'react';

// const HomeView = () => {
//   return <h1>Это домашняя страница</h1>;
// };

// export default HomeView;

// // https://api.themoviedb.org/3/movie/550?api_key=d939c9834c714302e4aa1e60bbc82061/trending/{media_type}/{time_window}
