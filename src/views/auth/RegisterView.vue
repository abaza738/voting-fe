<script setup lang="ts">
import { computed, reactive } from 'vue';

const form = reactive({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
});

const invalid = computed(() => {
    return (form.username.length < 1) || (form.password.length < 1) || (form.firstName.length < 1) || (form.lastName.length < 1);
});

function handleSubmit() {
    console.log(form);
}
</script>

<template>
<form @submit.prevent="handleSubmit">
    <input type="text" v-model="form.username" placeholder="Username" name="username" id="username">
    <div class="names">
        <input type="text" v-model="form.firstName" placeholder="First Name" name="firstName" id="firstName">
        <input type="text" v-model="form.lastName" placeholder="Last Name" name="lastName" id="lastName">
    </div>
    <input type="password" v-model="form.password" placeholder="Password" name="password" id="password">
    <div class="buttons">
        <button type="submit" class="primary" :disabled="invalid">Register</button>
        <div class="divider"></div>
        <RouterLink to="/login" style="display: flex; flex-direction: column;">
            <button type="button">Back to Login</button>
        </RouterLink>
    </div>
</form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.names {
    display: flex;
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