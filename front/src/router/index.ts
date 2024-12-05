import { createRouter, createWebHistory } from 'vue-router';
import AuthorList from '@/views/AuthorList.vue';
import AuthenticationPage from '@/views/authentication/AuthenticationPage.vue';
const routes = [
  { path: '/', redirect: '/authors' },
  { path: '/authors', component: AuthorList },
  { path: '/connect', component: AuthenticationPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
