import axios from 'axios';
// import PropTypes from 'prop-types';

const fetchQuery = ({ searchQuery = '' }) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};
// const fetchTrends = () => {
//   return axios
//     .get(
//       `https://api.themoviedb.org/3/trending/all/day?api_key=d939c9834c714302e4aa1e60bbc82061`,
//     )
//     .then(response => response.data.results)
//     .catch(error => console.log)
//     .finally(console.log('finish fetchQery'));
// };
// const fetchWhithId = ({ movieId = '' }) => {
//   return axios
//     .get(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US`,
//     )
//     .then(response => response.data)
//     .catch(error => console.log)
//     .finally(console.log('finish fetchQery'));
// };

// fetchHits.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
// };

export default { fetchQuery }; // fetchTrends, fetchWhithId
