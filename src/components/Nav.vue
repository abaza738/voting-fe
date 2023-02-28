<script setup lang="ts">
</script>

<template>
<nav>
    <div class="nav-item">
        <RouterLink to="/" class="nav-link">
            <fa icon="fa-solid fa-house" />
            <span class="label">Home</span>
        </RouterLink>
    </div>
    <div class="nav-item">
        <RouterLink to="/list" class="nav-link">
            <fa icon="fa-solid fa-square-poll-vertical" />
            <span class="label">List</span>
        </RouterLink>
    </div>
</nav>
</template>

<style scoped>
nav {
    height: 100%;
    background-color: #4f469c;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.nav-item {
    font-size: 1.25rem;
}

.nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;

}

.label {
    font-size: 0.8rem;
}
</style>