<template>
  <button @click="startgame()">Next</button>

  <userVue></userVue>

  <Chessboard></Chessboard>
</template>

<script setup lang="ts">
import Chessboard from '../components/ChessBoard.vue';
import userVue from '../components/userVue.vue';
function startgame(){}
</script>
