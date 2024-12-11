<template>
    <button @click="getGameOfUser()">reload</button>

    <!-- <userVue></userVue> -->
     <p> userConnecte </p>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { getApiGameOfUser } from '@/composables/game/gameService';
  const userConnecte = getApiGameOfUser(2);

  
  function startgame(){
  }
  
  
  function getGameOfUser(){


 }

 console.log(getApiGameOfUser(2));
 
  </script>
  