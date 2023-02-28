<script setup lang="ts">
import { useSession } from '@/stores/session.store';

const session = useSession();

</script>

<template>
<nav>
    <div class="section top">
        <h3>V</h3>
    </div>

    <div class="section middle">
        <div class="nav-item">
            <RouterLink to="/" class="nav-link">
                <fa icon="fa-solid fa-house" />
                <span class="label">Home</span>
            </RouterLink>
        </div>
        <div v-if="session.isAuthenticated" class="nav-item">
            <RouterLink to="/list" class="nav-link">
                <fa icon="fa-solid fa-square-poll-vertical" />
                <span class="label">List</span>
            </RouterLink>
        </div>
    </div>
    
    <div class="section bottom">
        <div class="nav-item">
            <RouterLink v-if="session.isAuthenticated" to="/profile" class="nav-link">
                <fa icon="fa-solid fa-user-circle" />
                <span class="label">Profile</span>
            </RouterLink>
            <RouterLink v-else to="/login" class="nav-link">
                <fa icon="fa-solid fa-right-to-bracket" />
                <span class="label">Login</span>
            </RouterLink>

        </div>
    </div>
</nav>
</template>

<style scoped>
nav {
    height: 100%;
    background-color: #4f469c;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
}

.section {
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
    text-decoration: none;
    color: white;
}

.label {
    font-size: 0.8rem;
}
</style>