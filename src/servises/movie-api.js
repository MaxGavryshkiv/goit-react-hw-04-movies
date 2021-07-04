import Axios from 'axios';
import PropTypes from 'prop-types';

const fetchQuery = ({ searchQuery = '' }) => {
  return Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  ).then(response => response.data.results);
};
const fetchTrends = () => {
  return Axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=d939c9834c714302e4aa1e60bbc82061`,
  ).then(response => response.data.results);
};
const fetchWhithId = ({ movieId = '' }) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US`,
  ).then(response => response.data);
};
const fetchCastWhithId = ({ movieId = '' }) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US`,
  ).then(response => response.data);
};
const fetchReviewWhithId = ({ movieId = '' }) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US&page=1`,
  ).then(response => response.data);
};

fetchQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
fetchWhithId.propTypes = {
  movieId: PropTypes.number.isRequired,
};
fetchCastWhithId.propTypes = {
  movieId: PropTypes.number.isRequired,
};
fetchReviewWhithId.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default {
  fetchQuery,
  fetchTrends,
  fetchWhithId,
  fetchCastWhithId,
  fetchReviewWhithId,
};
