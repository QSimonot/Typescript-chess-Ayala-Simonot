import type { User } from '@/model/User.model';
import { ref } from 'vue';

const userConnecte = ref<User>({ username: '', password: '' });

export function useUserConnecteService() {
  return {
    userConnecte,
  };
}
