import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import movieApi from '../servises/movie-api';
import Cast from '../components/cast';
import Reviews from '../components/review';
import DetailsNav from '../components/DetailsNav';

class MovieDetailsPage extends Component {
  state = {
    overview: null,
    genres: [],
    id: null,
    imgUrl: null,
    title: null,
    score: null,
    movies: [],
  };

  //  overview genres id poster_path title vote_average

  async componentDidMount() {
    await this.fetchWhithId();
  }

  fetchWhithId = () => {
    const { movieId } = this.props.match.params;
    const option = { movieId };

    this.setState({ isLoading: true });

    movieApi
      .fetchWhithId(option)
      .then(data => {
        this.setState(prevState => ({
          overview: data.overview,
          genres: data.genres,
          id: data.id,
          imgUrl: data.poster_path,
          score: data.vote_average,
          title: data.title,
        }));
      })
      .catch(error => console.log)
      .finally(() => {
        // console.log('finish fetchWhithId');
        this.setState({ isLoading: false });
      });
  };

  handleGoBack = () => {
    const { location, history } = this.props;

    // console.log(location.state);
    // console.log(location.state.from);
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/');
  };

  render() {
    const { overview, genres, imgUrl, score, title } = this.state;
    const imgPath = 'https://image.tmdb.org/t/p/w300';
    const { match, location } = this.props;

    // console.log(location, match);
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Вернуться назад
        </button>
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

        <DetailsNav match={match} location={location} />

        <Switch>
          <Route exact path={`${match.path}/cast`} component={Cast} />
          <Route exact path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
