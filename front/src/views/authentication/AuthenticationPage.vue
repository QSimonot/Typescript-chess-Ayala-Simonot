<template>
    <InputText v-model="user.username"></InputText>
    <InputText v-model="user.password"></InputText>
    <Button :label="label" @click="getToken()"></Button>

    <userVue></userVue>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { InputText } from 'primevue';
import { Button } from 'primevue';
import { useUserService } from '@/composables/utilisateur/userService';
import { useUserConnecteService } from '@/composables/utilisateur/userConnecteService';
import type { User } from '@/model/User.model';

import userVue from '@/components/userVue.vue';
import router from '@/router';



const { userConnecte } = useUserConnecteService();

const user = ref({ username: "", password: "" });
const label = "Connect";


async function getToken() {
    userConnecte.value = await useUserService(user.value);
    localStorage.setItem('user',JSON.stringify(user.value.username));
    router.push({path:'/gamelist'})
}
</script>