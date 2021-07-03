import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
// withRouter;
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
    const { movies, searchQuery } = this.state;
    const { location } = this.props;
    return (
      <>
        <SearchBar
          toUrl={`${this.props.match.url}${location.search}`}
          onSubmit={this.onChangeQuery}
        />
        <ul>
          {/* <Route
            path={`${this.props.match.path}?query=${searchQuery}`}
            render={props => <MoviesList {...props} movies={movies} />}
          /> */}
          <MoviesList movies={movies} query={searchQuery} />
        </ul>
      </>
    );
  }
}

export default MoviesPage;
// withRouter();
