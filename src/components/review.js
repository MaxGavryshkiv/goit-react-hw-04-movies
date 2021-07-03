import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

class Cast extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;
    console.log(movieId);
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US&page=1`,
    );
    console.log(response.data);

    this.setState({
      reviews: response.data.results,
    });
  }

  render() {
    const { reviews } = this.state;
    // const imgPath = 'https://image.tmdb.org/t/p/w300';
    console.log(reviews.total_results);
    return (
      <>
        <h1>Обзори</h1>
        {(reviews && <p>we don`t have reviews</p>) ||
          reviews.map(result => (
            <li key={result.id}>
              <p>{result.content}</p>
            </li>
          ))}
      </>
    );
  }
}

export default Cast;
