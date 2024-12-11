<template>
    <div id="app">
      <h1>Liste des jeux</h1>
      <div v-for="game in games" :key="game.id" class="game-item">
        <Button :id="'buttongames'+game.id" class='btn-liste-game' @click="loadGame(game.id)"> 
            <div class="img-div-players-liste-game">
                <p> <img class="img-liste-game img-king-white-liste-game" :src="'/public/img/King_White.svg'" alt=""> {{ game.white.username }}</p>
                <p><img class="img-liste-game img-king-black-liste-game" :src="'/public/img/King_Black.svg'" alt=""> {{ game.black.username }}</p>
            </div>
            <p class="p-date-liste-game"><strong>Date:</strong> {{ readableDate(game.date) }}</p>
            <div v-if="game.white.id == game.winner?.id" class="div-winner-liste-game">
                <p> {{ game.white.username }}</p>
                <img class="img-liste-game" :src="'/public/img/King_White.svg'" alt="">
            </div>
            <div v-if="game.black.id == game.winner?.id" class="div-winner-liste-game">
                <p> Winner </p>
                <img class="img-liste-game" :src="'/public/img/King_Black.svg'" alt="">
            </div>
        </Button>
      </div>
    </div>
    <Button @click="createGame()">Créer partie</Button>

</template>

<script setup lang="ts">
    import { onMounted, ref} from 'vue';
    import { getApiGameOfUser,createDefaultGame } from '../composables/game/gameService';
    import { getMyUserPlease } from '../composables/utilisateur/userService';

    import type { Game } from '@/model/Game.model';
import router from '@/router';
import ChessBoard from './ChessBoard.vue';
    let games= ref<Game[]>();
    
    onMounted(
    async()=>{
        let user = await getMyUserPlease();
        if(user === undefined ||user?.id === undefined){
            router.push({name:'login'});

        }else{
            games.value = await getApiGameOfUser(user?.id);
        }
        }
    )

    function loadGame(game:number){
        router.push({name:'Chessboard', params: {game} });
    }

    function readableDate(date:Date):string{
        const newDate = new Date(date);
        return newDate.getDay()+"/"+newDate.getMonth()+"/"+newDate.getFullYear();
    }

    async function createGame(){
    let username= localStorage.getItem('user');
    const split = username?.substring(1, username.length-1);
    if(split === undefined){

    }else{
      await createDefaultGame(split);
      router.push({name:'Gameliste'});
    }
  }

</script>