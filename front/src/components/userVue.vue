<template>
  <div>
    <p>Nom Utilisateur:</p>
    <p>{{ user }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getMyUserPlease } from '../composables/utilisateur/userService';
import type { User } from '@/model/User.model';
const user = ref<User>();

onMounted(
  async()=>{
    user.value = await getMyUserPlease();
  }
)

</script>
