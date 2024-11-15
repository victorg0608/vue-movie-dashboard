import { createStore } from 'vuex';
import movieApi from '../api/movieApi';

export default createStore({
  state: {
    movies: [],
    searchResults: [],
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setSearchResults(state, results) {
      state.searchResults = results;
    },
  },
  actions: {
    async loadMovies({ commit }) {
      const data = await movieApi.fetchMovies();
      console.log(data); // Check the structure of the data
      commit('setMovies', data.movies);
    },
    async searchMovies({ commit }, query) {
      const data = await movieApi.searchMovies(query);
      console.log(data); // Check the structure of the data
      commit('setSearchResults', data.movies);
    },
  },
  getters: {
    groupedMoviesByCategory: (state) => {
      if (!Array.isArray(state.movies)) {
        return {}; // Return an empty object if `movies` is not an array
      }
      return state.movies.reduce((groups, movie) => {
        const categories = movie.genres; // Get all genres
        categories.forEach((category) => {
          groups[category] = groups[category] || [];
          groups[category].push(movie);
        });
        return groups;
      }, {});
    },
    getMovieById: (state) => (id) => {
      return state.movies.find(movie => movie.id === id);
    },
  },
});