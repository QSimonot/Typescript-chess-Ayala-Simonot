import type { User } from '@/model/User.model';
import { getUser, authenticate } from './userApi';

async function getMyUserPlease(){
  const getMyUser = await getUser(2);
  return getMyUser;
}

async function useUserService(user: User): Promise<User> {
  user.token = await authenticate(user);
  return user;
}

export{
  getMyUserPlease,
  useUserService
}