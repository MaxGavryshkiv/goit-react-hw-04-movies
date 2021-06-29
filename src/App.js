import React from 'react';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies/:movieId"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movie
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Router>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
        {/* <Route exact path="/movies/:movieId/cast" component={Cast} />
    <Route exact path="/movies/:movieId/reviews" component={Reviews} /> */}
      </Router>
    </Switch>
  </>
);

export default App;
