import type { Game } from '@/model/Game.model';
import { getGameOfUser } from './gameApi';

async function getApiGameOfUser(id:number){
  let  gameOfUser = await getGameOfUser(id);
  return gameOfUser;
}


export{
    getApiGameOfUser,
}