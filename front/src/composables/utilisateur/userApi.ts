import axiosInstance from '@/config/AxiosConfig';
import { ApiUrlConnection, ApiGetUser } from '@/constants/ApiUrl';
import type { User } from '@/model/User.model';


async function authenticate(user: User): Promise<string> {
  const res = await axiosInstance.post<{ token: string }>(`${ApiUrlConnection}`, {
    grant_type: 'password',
    username: user.username,
    password: user.password,
  });
  return res.data.token;
}

function useUserApi(user: User) {
  const res = authenticate(user);
  return res;
}

async function getUser(id:number){
  const res = await axiosInstance.get<{ user: User }>(`${ApiGetUser}${id}`);
  return res.data.user;
}

export{
  useUserApi,
  getUser,
}
