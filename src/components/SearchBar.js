import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
    this.setState({ query: '' });
  };

  queryPath = () => {
    const { location, history } = this.props;
    const { query } = this.state;

    history.push(`${location.pathname}?query=${query}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />

        {/* onClick={this.handleGoBack} */}

        <button type="submit" onClick={this.queryPath}>
          <span>Search</span>
        </button>
      </form>
    );
  }
}

export default withRouter(Searchbar);
