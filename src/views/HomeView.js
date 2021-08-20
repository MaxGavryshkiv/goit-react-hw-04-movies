import React, { Component } from 'react';

import movieApi from '../servises/movie-api';
import Spiner from '../components/Spiner';
import MoviesList from '../components/MoviesList';

import '../styles/homeView.scss';

class HomeView extends Component {
  state = {
    movies: [],
    isLoading: false,
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
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        <h1 className="homeView-title">Trending today</h1>
        {(isLoading && <Spiner />) || (
          <ul>
            <MoviesList movies={movies} />
          </ul>
        )}
      </>
    );
  }
}

export default HomeView;
