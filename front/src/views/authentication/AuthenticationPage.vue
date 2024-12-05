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



const { userConnecte } = useUserConnecteService();

const user = ref<User>({ username: "", password: "" });
const label = "Connect";

if(sessionStorage.length>0)
{
    const token : string | undefined =sessionStorage.getItem("token")?.toString;
    user.value.token= token;
    console.log(user);
}


async function getToken() {
    userConnecte.value = await useUserService(user.value);
    sessionStorage.setItem('token', JSON.stringify(user.value.token));
}
</script>