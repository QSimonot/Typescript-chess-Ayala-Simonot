import type { User } from '@/model/User.model';
import { getUser } from './userApi';

async function getMyUserPlease(){
  const getMyUser = await getUser(2);
  return getMyUser;
}
export{
  getMyUserPlease,
}
