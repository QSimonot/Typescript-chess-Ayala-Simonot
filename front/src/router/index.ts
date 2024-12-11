import { createRouter, createWebHistory } from 'vue-router';
// import AuthorList from '@/views/AuthorList.vue';
import AuthenticationPage from '@/views/authentication/AuthenticationPage.vue';
import chessboard from '@/views/ChessGame.vue';
import SelectGame from '@/components/SelectGame.vue';

const routes = [
  { path: '/', redirect: '/authors' },
  { path: '/connect',name:'login', component: AuthenticationPage },
  {path: '/chessboard/:game',name:'Chessboard', component: chessboard},
  {path: '/gamelist', component: SelectGame},

];
// { path: '/authors', component: AuthorList },
//
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
