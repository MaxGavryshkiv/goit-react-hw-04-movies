import React, { Component } from 'react';
import movieApi from '../servises/movie-api';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    await this.fetchCastWhithId();
  }

  fetchCastWhithId = () => {
    const { movieId } = this.props.match.params;
    const option = { movieId };

    this.setState({ isLoading: true });

    movieApi
      .fetchCastWhithId(option)
      .then(data => {
        this.setState(prevState => ({
          cast: data.cast,
        }));
      })
      .catch(error => console.log)
      .finally(() => {
        // console.log('finish fetchCastWhithId');
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { cast } = this.state;
    const imgPath = 'https://image.tmdb.org/t/p/w300';

    return (
      <>
        <h1>Актори</h1>
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img src={`${imgPath}${actor.profile_path}`} alt={actor.name} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
