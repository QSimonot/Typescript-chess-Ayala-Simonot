<template>
  <div>
    <p>Nom Utilisateur:</p>
    <p>{{ user }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserService } from '../composables/utilisateur/userService';
const user = 'paolo';


</script>
