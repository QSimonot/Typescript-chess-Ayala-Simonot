<template>
  <div class="board">
    <template v-for="(row, rowIndex) in board" :key="rowIndex">
      <div v-for="(cell, colIndex) in row" :key="colIndex" :class="{ 'white': (rowIndex + colIndex) % 2 !== 0, 'black': (rowIndex + colIndex) % 2 == 0, 'selected':(boolBoard[rowIndex][colIndex])}" class="cell" @click="selectPiece(rowIndex,colIndex)">
          <img :src="'/public/img/'+cell.img" alt="">
      </div>
    </template>
  </div>
  <div class="capturedPieces-container">
    <template v-for="piece in capturedPiecesByWhite" :key="piece">
      <img :src="'/public/img/'+piece.img" alt="">
    </template>
  </div>
  <div class="capturedPieces-container">
    <template v-for="piece in capturedPiecesByBlack" :key="piece">
      <img :src="'/public/img/'+piece.img" alt="">
    </template>
  </div>
  <p>{{ currentMove }}</p>
  <button @click="playNextMove">Next</button>
  <button @click="startGame">START</button>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { getMove } from '../composables/move/moveService';
import type { Move } from '@/model/Move.model';
import { useRoute } from 'vue-router';
import {initBoard,nextMove,initBoolBoard} from '@/composables/piece/pieceService';

const board=ref();
const boolBoard=ref();
const currentMove=ref('');
const currentPlayer=ref();
const capturedPiecesByWhite=ref();
const capturedPiecesByBlack=ref();
const selectedCases:Array<{col:number,row:number}>=[];

let moveIndex=0;
function playNextMove(){
  currentMove.value=nextMove(moveIndex);
  moveIndex++;
}

function startGame(){
  board.value=initBoard();
  boolBoard.value=initBoolBoard();
  capturedPiecesByWhite.value=[];
  capturedPiecesByBlack.value=[];
  currentPlayer.value="white";
}

function selectPiece(r:number,c:number){
  boolBoard.value[r][c]=true;
  selectedCases.push({col:c,row:r});
  movePiece()

  if(selectedCases.length>1){
    boolBoard.value[r][c]=false;
    selectedCases.length=0;
  }
}

function movePiece(){

  if(selectedCases.length>1){
    const col = selectedCases[0].col;
    const row = selectedCases[0].row;

    boolBoard.value[row][col]=false;

    const d_col = selectedCases[1].col;
    const d_row = selectedCases[1].row;

    if(board.value[d_row][d_col].type!='-'){
      capturePiece(currentPlayer.value,d_row,d_col);
    }

    board.value[d_row][d_col]=board.value[row][col];
    board.value[row][col]={type:"-",img:""};
  }
}

function capturePiece(player:string,d_row:number,d_col:number){
  if(player=="white"){
    const piece=board.value[d_row][d_col];
    capturedPiecesByWhite.value.push(piece);
  }else{
    const piece=board.value[d_row][d_col];
    capturedPiecesByBlack.value.push(piece);
  }
}

function writeMove(){

}

const moves = ref<Move>();
const route = useRoute(); // Accéder aux données de la route

onMounted(
  async()=>{
        const param:number = Number(route.params.game);
        moves.value = await getMove(param);
        }
)
</script>
