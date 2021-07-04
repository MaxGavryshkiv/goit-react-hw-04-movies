import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class DetailsNav extends Component {
  render() {
    const { match, location } = this.props;
    // console.log(location, match);

    return (
      <div>
        <p>Additional information:</p>

        <ul>
          <li>
            <Link
              to={{
                pathname: `${match.url}/cast`, // Формирует путь для ссылки
                state: { ...location.state }, // Передает полученый стейт при переходе на актёров
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${match.url}/reviews`, // Формирует путь для ссылки
                state: { ...location.state }, // Передает полученый стейт при переходе на обзоры
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

// MovieNavigation.propTypes = {
//   match: PropTypes.object.isRequired,
//   location: PropTypes.object.isRequired,
// };

export default withRouter(DetailsNav);
