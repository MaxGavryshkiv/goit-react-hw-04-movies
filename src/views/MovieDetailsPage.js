import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';

import Cast from '../components/cast';
import Reviews from '../components/review';

class MovieDetailsPage extends Component {
  state = {
    overview: null,
    genres: [],
    id: null,
    imgUrl: null,
    title: null,
    score: null,
  };

  //  overview genres id poster_path title vote_average

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US`,
    );

    // console.log(response.data);
    // if (response.data.title) {
    //   this.setState({ title: response.data.title });
    // } else {
    //   this.setState({ title: response.data.name });
    // }
    this.setState({
      overview: response.data.overview,
      genres: response.data.genres,
      id: response.data.id,
      imgUrl: response.data.poster_path,
      score: response.data.vote_average,
      title: response.data.title,
    });
  }

  render() {
    const { overview, genres, imgUrl, score, title, id } = this.state;
    const imgPath = 'https://image.tmdb.org/t/p/w300';
    const { match } = this.props;

    // console.log(genres);
    return (
      <>
        <h1>Страница одной книги </h1>
        <img src={`${imgPath}${imgUrl}`} alt="" />
        <h2>{title}</h2>
        <p>User score: {score}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <p>Additional information</p>
        <ul>
          <Link to={`${match.url}/cast`}>
            <li>Cast</li>
          </Link>
          <Link to={`${match.url}/reviews`}>
            <li>Reviews</li>
          </Link>
        </ul>
        {/* {this.props.match.params.bookId} */}
        <Route
          path={`${match.path}/cast`}
          render={props => <Cast {...props} movieId={id} />}
        />
        <Route
          path={`${match.path}/reviews`}
          render={props => <Reviews {...props} movieId={id} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;

// const MovieDetailsPage = () => <h1>MovieDetailsPage</h1>;

// export default MovieDetailsPage;
