import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    query: '',
    searchQuery: '',
    movies: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
      );

      this.setState({ movies: response.data.results });
    }
  }

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });

    console.log('change');
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ searchQuery: this.state.query });
    // this.props.onSubmit(this.state.query);
    this.setState({ query: '' });

    console.log('send');
  };

  render() {
    const { movies, searchQuery } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />

          <button type="submit">
            <span>Search</span>
          </button>
        </form>
        <ul>
          {searchQuery &&
            movies.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                  {(movie.name && movie.name) || movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
