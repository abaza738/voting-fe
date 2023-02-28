<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import { onMounted } from "vue";

onMounted(() => {
  if (!localStorage.getItem('username')) {
    let username;
    while(!username) {
      username = window.prompt('Enter yer name please!');
    }
    localStorage.setItem('username', username);
  }
});
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="nav-side">
        <Nav />
      </div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  display: flex;
  padding: 2vh;
}

.wrapper {
  flex: 1;
  display: flex;
  gap: 2vh;
}

.content {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  flex: 1;
  overflow: hidden;
}
</style>
