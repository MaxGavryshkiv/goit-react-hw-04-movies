import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/Searchbar.scss';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  queryPath = () => {
    const { location, history } = this.props;
    const { query } = this.state;

    // location.search.push(query);
    // console.log(location.search, 'searchBar');
    history.push(`${location.pathname}?query=${query}`);
  };

  render() {
    return (
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />

          {/* onClick={this.handleGoBack} */}

          <button
            className="SearchForm-button"
            type="submit"
            onClick={this.queryPath}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Searchbar);
