import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://wookie.codesubmit.io",
  headers: {
    Authorization: "Bearer Wookie2021",
  },
});

export default {
  async fetchMovies() {
    const response = await apiClient.get('/movies');
    console.log(response);
    return response.data;
  },
  async searchMovies(query) {
    const response = await apiClient.get(`/movies?q=${query}`);
    return response.data;
  },
};
