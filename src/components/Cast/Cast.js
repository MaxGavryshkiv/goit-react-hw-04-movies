import React, { Component } from 'react';
import movieApi from '../../servises/movie-api';

import '../../styles/cast.scss';
import pictures from '../../pictures/nopictures.jpg';

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
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { cast } = this.state;
    const imgPath = 'https://image.tmdb.org/t/p/w300';

    return (
      <>
        <h1>Актори</h1>
        <ul className="cast-ul">
          {cast.map(actor => (
            <li className="cast-li" key={actor.id}>
              {(actor.profile_path === null && (
                <img
                  className="cast-default-pict"
                  src={pictures}
                  alt={actor.name}
                />
              )) || (
                <img src={`${imgPath}${actor.profile_path}`} alt={actor.name} />
              )}

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
