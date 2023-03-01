<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
<div class="auth-wrapper">
    <div class="section splash">
        <h2>{{ route.meta.title }}</h2>
    </div>
    <div class="section">
        <RouterView />
    </div>
</div>
</template>

<style scoped>
.auth-wrapper {
    flex: 1;
    display: flex;
}

.section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.splash {
    background-color: var(--primary);
    color: white;
    border-radius: 0.5rem;
}
</style>