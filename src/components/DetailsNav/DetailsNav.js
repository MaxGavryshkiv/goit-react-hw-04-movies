import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/Button.scss';

class DetailsNav extends Component {
  render() {
    const { match, location } = this.props;
    // console.log(location, match);

    return (
      <div>
        <p>Additional information:</p>

        <ul className="flex">
          <li>
            <Link
              to={{
                pathname: `${match.url}/cast`, // Формирует путь для ссылки
                state: { ...location.state }, // Передает полученый стейт при переходе на актёров
              }}
              className="Button m-right"
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
              className="Button m-bot"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

DetailsNav.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(DetailsNav);
