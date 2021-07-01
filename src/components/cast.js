import React, { Component } from 'react';
import Axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;
    console.log(movieId);
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US`,
    );
    // console.log(response.data.cast);

    //   adult: false;
    //   cast_id: 8;
    //   character: 'George Washington (voice)';
    //   credit_id: '6089bce0fcec2e00290807ea';
    //   gender: 2;
    //   id: 38673;
    //   known_for_department: 'Acting';
    //   name: 'Channing Tatum';
    //   order: 0;
    //   original_name: 'Channing Tatum';
    //   popularity: 7.452;
    //   profile_path: '/bhTmp6FA8fOQnGlNk75tdmj2bpu.jpg';

    this.setState({
      cast: response.data.cast,
    });
  }

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
