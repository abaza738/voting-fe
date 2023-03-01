<script setup lang="ts">
import { useSession } from '@/stores/session.store';
import type { IUser } from '@/types';
import { onMounted, ref } from 'vue';

const session = useSession();

const me = ref<IUser | null>(null);

onMounted(() => {
    me.value = session.currentUser;
});
</script>

<template>
    <div class="wrapper">
        <h5>Welcome {{ me?.firstName }} {{ me?.lastName }}. Your ID is {{ me?.id }}, and your username is {{ me?.username }}.</h5>
        <p>Wanna change something? Too bad.</p>
    </div>
</template>

<style scoped>
.wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>