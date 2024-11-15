<template>
  <div class="movie-list">
    <div class="movie-item" v-for="movie in movies" :key="movie.id">
      <div @click="selectMovie(movie.id)">
        <img :src="movie.poster" :alt="movie.title" class="movie-poster" />
        <h3>{{ movie.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectMovie(id) {
      this.$emit('selectMovie', id); // Emit the selected movie ID
    },
  },
};
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 20px;
  margin-bottom: 40px;
}

.movie-item {
  width: 150px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
}

.movie-item:hover {
  transform: scale(1.05);
}

.movie-poster {
  width: 100%;
  border-radius: 8px 8px 0 0;
}
</style>