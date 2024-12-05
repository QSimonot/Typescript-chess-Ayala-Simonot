<template>
    <button @click="startgame()">Next</button>
  
    <userVue></userVue>
  
    <Chessboard></Chessboard>
    <p>{{ currentMove }}</p>
    <button @click="nextMove()">Next</button>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Chessboard from '../components/ChessBoard.vue';
  import userVue from '../components/userVue.vue';
  
  
  
  
  let moves:Array<string>;
  let moveIndex=0;
  const currentMove=ref('');
  
  function startgame(){
  }
  
  function getMoves(){
    const game = "1. e4 g6 2. c3 Bg7 3. Nf3 d6 4. b4 e5 5. Bc4 Ne7 6. O-O O-O 7. g4 d5 8. Bb3 Bxg4 9. Bxd5 Nxd5 10. Nxe5 Bxe5 11. Qxg4 a5 12. Na3 axb4 13. cxb4 Nxb4 14. Qg5 Qxg5+ 15. Kh1 Qg4 16. Rg1 Qxe4+ 17. Rg2 Nc2 18. h3 Nxa1 19. Bb2 Bxb2 20. f3 Qxf3 21. Kg1 Rxa3 22. d4 Rd8 23. h4 Rxd4 24. h5 Rd1+ 25. Kh2 Be5+ 26. Rg3 Bxg3+ 0-1"
    const movePattern = /\b([a-h][1-8]|O-O(?:-O)?|[NBRQK][a-h1-8]?x?[a-h][1-8](?:\+|#)?)\b/g;
    const temp = game.match(movePattern);
    moves = temp || [];
  }
  
  function nextMove(){
    currentMove.value=moves[moveIndex];
    moveIndex++;
  }
  getMoves()
  nextMove()
  
  </script>
  