<template>
  <div class="movie-detail">
    <div>
      <img :src="movie.backdrop" alt="Movie Backdrop" class="movie-backdrop" />
    </div>
    <div class="movie-info">
      <div class="flex-between">
        <h1>{{ movie.title }} ({{ movie.imdb_rating }})</h1>
        <div class="rating">
          <span v-for="star in 10" :key="star" class="star" :class="{ filled: star <= movie.imdb_rating }">★</span>
        </div>
      </div>
      <p>{{ formattedReleaseDate }} | {{ movie.length }} | {{ movie.director }}</p>
      <p>Cast: {{ movie.cast.join(', ') }}</p>
      <h2>Movie Description:</h2>
      <p>{{ movie.overview }}</p>
      <button class="close" @click="$emit('close')">Close</button> <!-- Button to close detail view -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedReleaseDate() {
      return this.movie.released_on.split('T')[0]; // Format the release date
    },
  },
};
</script>

<style scoped>
.movie-detail {
  display: flex;
  max-width: 1280px;
  padding: 20px;
  background-color: #fff;
}

.movie-backdrop {
  max-width: 600px;
  min-width: 150px;
  height: auto;
  margin-right: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.movie-info {
  flex: 1;
}

.rating {
  font-size: 36px;
}

.star {
  color: lightgray;
}

.star.filled {
  color: gold;
}
</style>