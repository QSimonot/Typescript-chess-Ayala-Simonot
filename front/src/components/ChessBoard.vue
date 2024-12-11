<template>
  <div class="board">
    <template v-for="(row, rowIndex) in board" :key="rowIndex">
      <div v-for="(cell, colIndex) in row" :key="colIndex" :class="{ 'white': (rowIndex + colIndex) % 2 !== 0, 'black': (rowIndex + colIndex) % 2 == 0, 'selected':(rowIndex==selectedRow&&colIndex==selectedCol)}" class="cell" @click="selectPiece(rowIndex,colIndex)">
          <img :src="'/public/img/'+cell.img" alt="">
          <span>row :{{ rowIndex }}</span>
          <span>col :{{ colIndex }}</span>
      </div>
    </template>
  </div>
  <p>{{ currentMove }}</p>
  <button @click="playNextMove">Next</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {initBoard,nextMove} from '@/composables/piece/pieceService';
import type { Piece } from '@/model/Piece.model';

const board=initBoard();
const currentMove=ref('');
const selectedRow=ref();
const selectedCol=ref();


let moveIndex=0;
function playNextMove(){
  currentMove.value=nextMove(moveIndex);
  moveIndex++;
}

function selectPiece(rowIndex:number,colIndex:number){
  selectedRow.value=rowIndex;
  selectedCol.value=colIndex;
}

</script>
