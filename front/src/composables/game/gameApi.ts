import axiosInstance from '@/config/AxiosConfig';
import { ApiGetGameOfUser } from '@/constants/ApiUrl';
import type { Game } from '@/model/Game.model';




async function getGameOfUser(id:number){
  const res = await axiosInstance.get<Game[]>(`${ApiGetGameOfUser}${id}`);
  return res.data;
}

export{
    getGameOfUser,
}
