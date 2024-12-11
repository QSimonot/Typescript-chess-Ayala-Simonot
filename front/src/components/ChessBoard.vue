<template>
  <div class="board">
    <template v-for="(row, rowIndex) in board" :key="rowIndex">
      <div v-for="(cell, colIndex) in row" :key="colIndex" :class="{ 'white': (rowIndex + colIndex) % 2 !== 0 }" class="cell">
        {{ cell }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getMove } from '../composables/move/moveService';
import type { Game } from '@/model/Game.model';
import type { Move } from '@/model/Move.model';
import { useRoute } from 'vue-router';



const board =[
  ["R","N","B","Q","K","B","N","R"],
  ["P","P","P","P","P","P","P","P"],
  ["-","-","-","-","-","-","-","-"],
  ["-","-","-","-","-","-","-","-"],
  ["-","-","-","-","-","-","-","-"],
  ["-","-","-","-","-","-","-","-"],
  ["P","P","P","P","P","P","P","P"],
  ["R","N","B","Q","K","B","N","R"]
];

let moves = ref<Move>();
const route = useRoute(); // Accéder aux données de la route

onMounted(
  async()=>{
        let param:number = Number(route.params.game);
        moves.value = await getMove(param);
        console.log();
        }
)
</script>
