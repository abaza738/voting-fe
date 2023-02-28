<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, type Ref } from "vue";
import type { Session } from "../types"

const listOfSessions: Ref<Session[]> = ref([]);

function getSessions() {
    axios.get('/sessions').then(sessions => {
        listOfSessions.value = sessions.data;
    });
}

onMounted(() => {
    getSessions();
});

</script>

<template>
<div id="list">
    <h4>Sessions</h4>
    <div class="list" v-if="listOfSessions.length">
        <div class="session" v-for="session in listOfSessions">
            {{ session.name }}
        </div>
    </div>
    <div class="empty" v-else>
        <img src="/empty.gif" width="500">
        Nothing to see here...
    </div>
</div>
</template>

<style scoped>
#list {
    display: flex;
    flex-direction: column;
    flex: 1;
}
.list {
    flex: 1;
}
.empty {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
}
</style>