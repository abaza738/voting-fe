<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import { onMounted, reactive } from "vue";
import party from "party-js";
import { useAuth } from "./stores/auth.store";

const auth = useAuth();
const position = reactive({
  top: `0px`,
  left: `0px`,
});

onMounted(() => {
  randomisePosition();
  auth.me();
});

function randomisePosition() {
  position.top = `${Math.round(Math.random() * window.innerHeight - 19)}px`;
  position.left = `${Math.round(Math.random() * window.innerWidth - 19)}px`;
}

function handleEggClick(e: any) {
  party.confetti(e.target)
  document.body.classList.add('loopity-loop');
  setTimeout(() => {
    document.body.classList.remove('loopity-loop');
    randomisePosition();
  }, 2e3)
}

</script>

<template>
  <main>
    <div id="egg" @click="handleEggClick" v-bind:style="position"></div>
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
  position: relative;
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

#egg {
  cursor: pointer;
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  z-index: 50;
}
</style>
