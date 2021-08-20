import React, { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Spiner from './components/Spiner';
import './styles/Button.scss';
import './App.scss';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movies-details-page" */
  ),
);

const App = () => (
  <>
    <ul className="flex">
      <li>
        <NavLink exact to="/" className="Button m-right">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className="Button">
          Movies
        </NavLink>
      </li>
    </ul>

    <Suspense fallback={<Spiner />}>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
