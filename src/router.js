import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/homePage.vue';
import Leaderboard from './components/Leaderboard.vue';
import Settings from './components/Settings.vue';
import Person from './components/Person.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Leaderboard', component: Leaderboard },
  { path: '/Settings', component: Settings },
  { path: '/Person/:name', component: Person}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;