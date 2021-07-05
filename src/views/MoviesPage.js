import React, { Component } from 'react';
import queryString from 'query-string';

import movieApi from '../servises/movie-api';
import Spiner from '../components/Spiner';
import SearchBar from '../components/Searchbar/SearchBar';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
    isLoading: false,
  };

  ///////////////////////////////////

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      await this.fetchQuery();
    }
  }

  ////////////////////////////////////////////

  componentDidMount() {
    const { search, pathname } = this.props.location;
    const { query } = queryString.parse(search);

    if (search && pathname) {
      this.setState({
        searchQuery: query,
      });
    }
  }

  ////////////////////////////////////////////

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
    const { history } = this.props;

    this.setState({
      searchQuery: query,
      movies: [],
    });

    history.push({
      search: `query=${query}`,
    });
  };

  //////////////////////////////////////////

  render() {
    const { movies, searchQuery, isLoading } = this.state;
    const { location } = this.props;
    return (
      <>
        <SearchBar
          toUrl={`${this.props.match.url}${location.search}`}
          onSubmit={this.onChangeQuery}
        />

        {(isLoading && <Spiner />) || (
          <ul>
            <MoviesList movies={movies} query={searchQuery} />
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
