import axiosInstance from '@/config/AxiosConfig';
import { ApiGetGameOfUser,ApiPostNewGame } from '@/constants/ApiUrl';
import type { Game } from '@/model/Game.model';


async function createGame(white:number, black:number, date:Date,hidden:boolean, ranked:boolean): Promise<number> {
  const res = await axiosInstance.post<{ }>(`${ApiPostNewGame}`, {
    white_id: white,
    black_id: black,
    date:date.getDate(),
    winner: -1,
    hidden:hidden,
    ranked:ranked
  });
  return res.status;
}


async function getGameOfUser(id:number){
  const res = await axiosInstance.get<Game[]>(`${ApiGetGameOfUser}${id}`);
  return res.data;
}

export{
    getGameOfUser,
    createGame,
}
