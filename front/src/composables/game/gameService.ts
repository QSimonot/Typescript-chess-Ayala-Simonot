import type { Game } from '@/model/Game.model';
import { getGameOfUser,createGame } from './gameApi';
import { getUser } from '../utilisateur/userApi';

async function getApiGameOfUser(id:number){
  let  gameOfUser = await getGameOfUser(id);
  return gameOfUser;
}

async function getMoveOfGame(id:number){
  let  gameOfUser = await getGameOfUser(id);
  return gameOfUser;
}

async function updateMove(id:number, move:string){
  let  gameOfUser = await updateMove(id,move);
  if(gameOfUser == 200){
    return 200;
  }else{
    return 400;
  }
}


async function createDefaultGame(name:string) :Promise<number>{
  const white = await getUser(name);
  const black = await getUser('default');
  if(white.id === undefined || black.id === undefined){
    return 400;
  }else{
    const date = new Date();
    let success = await createGame(white.id, black.id ,date,true,false);
    if(success){
      return 200;
    }else{
      return 400;
    }
  } 
}

async function createGameWithPlayers(player1:string, player2:string){
  const white = await getUser(player1);
  const black = await getUser(player2);
  if(white.id === undefined || black.id === undefined){
    return ;
  }else{
    const date = new Date();
    let success = await createGame(white.id, black.id ,date,true,false);
  } 
}

export{
    getApiGameOfUser,
    createDefaultGame,
}