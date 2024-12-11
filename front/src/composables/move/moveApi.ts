import axiosInstance from '@/config/AxiosConfig';
import { ApiGetMovesOfGame } from '@/constants/ApiUrl';
import type { Move } from '@/model/Move.model';



async function getMoveOfGame(id:number){
  const res = await axiosInstance.get< Move >(`${ApiGetMovesOfGame}${id}`);
  return res.data;
}

export{
    getMoveOfGame,
}
