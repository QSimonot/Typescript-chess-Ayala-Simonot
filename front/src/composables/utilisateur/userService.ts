import type { User } from '@/model/User.model';
import { getUser, authenticate } from './userApi';

async function getMyUserPlease(){
  let username= localStorage.getItem('user');
  const split = username?.substring(1, username.length-1);
  if(username === null ||  split === undefined){
    
  }else{
    const getMyUser = await getUser(split);
    return getMyUser;
  }
}

async function useUserService(user: User): Promise<User> {
  user.token = await authenticate(user);
  return user;
}

export{
  getMyUserPlease,
  useUserService
}