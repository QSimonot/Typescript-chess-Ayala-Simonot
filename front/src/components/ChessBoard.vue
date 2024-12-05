<template>
  <div class="board">
    <template v-for="(row, rowIndex) in board" :key="rowIndex">
      <div v-for="(cell, colIndex) in row" :key="colIndex" :class="{ 'white': (rowIndex + colIndex) % 2 !== 0 }" @click="toggleColor" class="cell">
        {{ cell }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">

function toggleColor(e){

}

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

</script>
