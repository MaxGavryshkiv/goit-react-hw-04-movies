import React, { Component } from 'react';
import Axios from 'axios';

import MoviesList from '../components/MoviesList';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=d939c9834c714302e4aa1e60bbc82061',
    );
    this.setState({ movies: response.data.results });
    // console.log(this.state.movies);
  }

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
