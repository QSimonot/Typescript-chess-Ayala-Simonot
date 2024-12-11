<template>
    <div id="app">
      <h1>Liste des jeux</h1>
      <div v-for="game in games" :key="game.id" class="game-item">
        <Button :id="'buttongames'+game.id" @click="loadGame(game.id)"> 
            <div>
                <p><strong>Joueur 1:</strong> {{ game.white.username }}</p>
                <p><strong>Joueur 2:</strong> {{ game.black.username }}</p>
            </div>
            <p><strong>Date:</strong> {{ game.date }}</p>
            <p><strong>Fini:</strong> {{ game.winner ? game.winner.username : 'Pas finis' }}</p>
        </Button>
      </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref} from 'vue';
    import { getApiGameOfUser } from '../composables/game/gameService';
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

</script>