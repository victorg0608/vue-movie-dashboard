import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MovieDetail from '../components/MovieDetail.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/movie/:id', name: 'MovieDetail', component: MovieDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
