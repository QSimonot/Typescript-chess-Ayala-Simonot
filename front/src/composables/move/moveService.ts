import type { Move } from '@/model/Move.model';
import { getMoveOfGame } from './moveApi';

async function getMove(id:number){
  const getMyUser = await getMoveOfGame(id);
  return getMyUser;
}


export{
  getMove,
}