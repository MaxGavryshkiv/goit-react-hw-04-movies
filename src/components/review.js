import React, { Component } from 'react';
import movieApi from '../servises/movie-api';

class Cast extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    await this.fetchReviewWhithId();
  }

  fetchReviewWhithId = () => {
    const { movieId } = this.props.match.params;
    const option = { movieId };

    this.setState({ isLoading: true });

    movieApi
      .fetchReviewWhithId(option)
      .then(data => {
        this.setState(prevState => ({
          reviews: data,
        }));
      })
      .catch(error => console.log)
      .finally(() => {
        // console.log('finish fetchReviewWhithId');
        this.setState({ isLoading: false });
      });
  };
  render() {
    const { reviews } = this.state;

    return (
      <>
        <h1>Обзори</h1>
        {reviews.total_results === 0 && <p>we don`t have reviews</p>}
        {reviews.total_results > 0 &&
          reviews.results.map(result => (
            <li key={result.id}>
              <h2>Autor: {result.author}</h2>
              <p>{result.content}</p>
            </li>
          ))}
        {/* // reviews.results.map(result => (
          //   <li key={result.id}>
          //     <p>{result.content}</p>
          //   </li>
          // ))}
        } */}
      </>
    );
  }
}

export default Cast;
