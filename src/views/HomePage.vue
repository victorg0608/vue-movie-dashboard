<template>
  <NavBar @search="handleSearch" />
  <div class="main">
    <div v-if="selectedMovieId">
      <MovieDetail :movie="getMovieById(selectedMovieId)" @close="clearSelectedMovie" />
    </div>
    <div v-else>
      <div v-for="(movies, category) in groupedMoviesByCategory" :key="category">
        <h1>{{ category }}</h1>
        <MovieList :movies="movies" @selectMovie="selectMovie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavBar from '../components/NavbarComponent.vue';
import MovieList from '../components/MovieList.vue';
import MovieDetail from '../components/MovieDetail.vue'; // Import MovieDetail

export default {
  components: { NavBar, MovieList, MovieDetail },
  data() {
    return {
      selectedMovieId: null, // Track the selected movie ID
    };
  },
  computed: {
    ...mapGetters(['groupedMoviesByCategory', 'getMovieById']),
  },
  methods: {
    ...mapActions(['loadMovies', 'searchMovies']),
    handleSearch(query) {
      this.searchMovies(query);
    },
    selectMovie(id) {
      this.selectedMovieId = id; // Set the selected movie ID
    },
    clearSelectedMovie() {
      this.selectedMovieId = null; // Clear the selected movie ID
    },
  },
  created() {
    this.loadMovies();
  },
};
</script>

<style>
.main {
  max-width: 1500px;
  margin: 30px auto;
  padding: 10px 50px;
}
</style>