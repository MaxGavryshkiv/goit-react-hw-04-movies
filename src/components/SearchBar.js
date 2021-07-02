import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.query);

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />

        <Link to={`/movies?query=${query}`}>
          <button type="submit">
            <span>Search</span>
          </button>
        </Link>
      </form>
    );
  }
}

export default Searchbar;
