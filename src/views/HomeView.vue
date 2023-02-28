<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import words from 'random-words';
import { useRouter } from 'vue-router';

const router = useRouter();
const data = ['projects!', 'users!', 'votes!'];
let index = 0;
let interval: number;

const transitionState = reactive({
  'fade-out': false,
  'fade-in': true,
});
const username = ref(localStorage.getItem('username'));
const option = ref();

onMounted(() => {
  interval = setInterval(switchOptions, 3e3);
});

onUnmounted(() => clearInterval(interval));

function switchOptions() {
  transitionState['fade-in'] = false;
  transitionState['fade-out'] = true;
  setTimeout(() => {
    index = ++index%3;
    transitionState['fade-in'] = true;
    transitionState['fade-out'] = false;
  }, 550);
}

function generateSessionId() {
  const timeSeed = Date.now();
  const randomWord = words({ exactly: 1, seed: `${timeSeed}` });
  const newSessionId = `${randomWord[0]}-${timeSeed}`;
  return newSessionId;
}

function createVote() {
  const sessionId = generateSessionId();
  console.log(sessionId);
  localStorage.setItem('sessionId', sessionId);
  router.push({ path: `vote/${sessionId}` });
}

function joinVote() {
  const sessionId = window.prompt('Ye want this, laddy?');
  console.log(sessionId);
  router.push({ path: `vote/${sessionId}` });
}
</script>

<template>
  <div class="home">

  <div class="logo">
    <img src="/makane-ar.svg" alt="makane-ar">
    <img src="/makane-en.svg" alt="makane-en">
  </div>

  <h6 class="welcome">Welcome {{ username }}!</h6>

  <h1>Vote with Vite</h1>

  <h4>Unlimited <span ref="option" class="option" :class="transitionState">{{ data[index] }}</span></h4>

  <div class="buttons">
    <div class="top">
      <button @click="createVote" class="primary"><fa icon="fa-solid fa-plus" /> Create Vote</button>
    </div>

    <div class="divider"></div>

    <div class="bottom">
      <button @click="joinVote"><fa icon="fa-solid fa-circle-user" /> Join Vote</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  background: url('./bg.jpg') center no-repeat;
}

img {
  filter: invert(1);
}

.logo {
  position: absolute;
  top: 2vh;
  right: 2vh;
  fill: white;
}

h4 {
  overflow: hidden;
  margin-block-end: 1rem;
}

.option {
  position: relative;
  display: inline-block;
  transition: 500ms;
  transform: translateY(-100%);
}

.fade-in {
  transform: translateY(0%);
}

.fade-out {
  transform: translateY(100%);
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  gap: 1rem;
}

.divider {
  height: 100%;
  border: 1px solid #e0e0e0;
}

button {
  font-size: 1.5rem;
}
</style>