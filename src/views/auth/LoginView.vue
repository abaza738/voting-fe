<script setup lang="ts">
import { useAuth } from '@/stores/auth.store';
import { useSession } from '@/stores/session.store';
import { computed } from '@vue/reactivity';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const auth = useAuth();
const session = useSession()
const router = useRouter();

const form = reactive({
    username: '',
    password: '',
});

const invalid = computed(() => {
    return (form.username.length < 1) || (form.password.length < 1);
});

function handleSubmit() {
    auth.login(form).then(response => {
        session.setToken(response.data.access);
        session.isAuthenticated = true;
        auth.me();
        router.push('/');
    }).catch(err => {
        session.currentUser = null;
        session.isAuthenticated = false;
    });
}
</script>

<template>
<form @submit.prevent="handleSubmit">
    <input type="text" v-model="form.username" placeholder="Username" name="username" id="username">
    <input type="password" v-model="form.password" placeholder="Password" name="password" id="password">

    <div class="buttons">
        <button type="submit" class="primary" :disabled="invalid">Login</button>

        <div class="divider"></div>

        <RouterLink to="/register" style="display: flex; flex-direction: column;">
            <button type="button">Register</button>
        </RouterLink>
    </div>
</form>
</template>

<style scoped>
form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.buttons {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.divider::after {
    content: "";
    display: block;
    margin: auto;
    width: 50%;
    border-top: 1px solid lightgrey;
}
</style>