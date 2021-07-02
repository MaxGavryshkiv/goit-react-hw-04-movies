import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import movieApi from '../servises/movie-api';
import SearchBar from '../components/SearchBar';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
    // isLoading: false,
  };

  ///////////////////////////////////

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchQuery();
    }
  }

  ///////////////////////////////////////////

  fetchQuery = () => {
    const { searchQuery } = this.state;
    const option = { searchQuery };

    this.setState({ isLoading: true });

    movieApi
      .fetchQuery(option)
      .then(results => {
        this.setState(prevState => ({
          movies: [...results],
        }));
      })
      .catch(error => console.log)
      .finally(() => {
        // console.log('finish fetchQery');
        this.setState({ isLoading: false });
      });
  };

  ////////////////////////////////////////

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      movies: [],
    });
  };

  //////////////////////////////////////////

  render() {
    const { movies, searchQuery } = this.state;
    return (
      <>
        <SearchBar
          toUrl={`${this.props.match.url}?query=`}
          onSubmit={this.onChangeQuery}
        />
        <ul>
          <Route
            path={`${this.props.match.path}?query=${searchQuery}`}
            render={props => <MoviesList {...props} movies={movies} />}
          />
          {/* <MoviesList movies={movies} query={searchQuery} /> */}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
