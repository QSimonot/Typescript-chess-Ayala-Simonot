import { createRouter, createWebHistory } from 'vue-router';
// import AuthorList from '@/views/AuthorList.vue';
import AuthenticationPage from '@/views/authentication/AuthenticationPage.vue';
import chessboard from '@/views/ChessGame.vue';

const routes = [
  { path: '/', redirect: '/authors' },
  { path: '/connect', component: AuthenticationPage },
  {path: '/chessboard', component: chessboard},
];
// { path: '/authors', component: AuthorList },
//
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
