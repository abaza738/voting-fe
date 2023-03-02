<script setup lang="ts">
import { useSession } from '@/stores/session.store';
import axios from 'axios';
import party from "party-js";
import type { DynamicSourceType } from 'party-js/lib/systems/sources';
import words from 'random-words';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const session = useSession();

const data = ['projects!', 'users!', 'votes!'];
let index = 0;
let interval: number;

const snackbar = reactive({
  show: false,
  text: '',
});

const transitionState = reactive({
  'fade-out': false,
  'fade-in': true,
});
const option = ref();

const position = reactive({
  x: '0px',
  y: '0px',
});

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

function generateSessionName() {
  const timeSeed = Date.now();
  const randomWord = words({ exactly: 1, seed: `${timeSeed}` });
  const newSessionName = `${randomWord[0]}-${timeSeed}`;
  return newSessionName;
}

async function createSession() {
  const sessionName = generateSessionName();
  const newSession = await axios.post('/sessions', { name: sessionName });
  snackbar.show = true;
  snackbar.text = newSession.data.name;
  // router.push({ path: `vote/${sessionId}` });
}

function joinVote(e: MouseEvent) {
  e.preventDefault();
  party.confetti(e.target as DynamicSourceType);
}

function partaaaaay(e: any) {
  party.confetti(e.target, { spread: 500 })
}

function moveButton() {
  position.x = `${Math.round(Math.random() * 150)}px`;
  position.y = `${Math.round(Math.random() * 150)}px`;
}

</script>

<template>
  <div class="home">

  <div class="logo" @click="partaaaaay">
    <img src="/makane-ar.svg" alt="makane-ar">
    <img src="/makane-en.svg" alt="makane-en">
  </div>

  <h6 class="welcome">Welcome <span v-if="session.isAuthenticated">{{ session.currentUser?.firstName }}</span><span v-else>there</span>!</h6>

  <h1>Vote with Vite</h1>

  <h4>Unlimited <span ref="option" class="option" :class="transitionState">{{ data[index] }}</span></h4>

  <div class="buttons">
    <div class="top">
      <button v-if="session.isAuthenticated" @click="createSession" class="primary"><fa icon="fa-solid fa-plus" /> New Session</button>
      <RouterLink v-else to="/register">
        <button class="primary"><fa icon="fa-solid fa-plus" /> Register</button>
      </RouterLink>
    </div>

    <div class="divider"></div>

    <div class="bottom">
      <button v-if="session.isAuthenticated" @click="moveButton" v-bind:style="{transform: `translate(${position.x}, ${position.y})`}"  @contextmenu="joinVote">
        <fa icon="fa-solid fa-circle-user" /> Join Vote
      </button>
      <RouterLink v-else to="/login">
        <button><fa icon="fa-solid fa-right-to-bracket" /> Login</button>
      </RouterLink>
    </div>
  </div>
  <v-snackbar v-model="snackbar.show" color="success" variant="flat">
    <v-icon icon="checkmark"></v-icon> Session <code>{{ snackbar.text }}</code> created successfully!
  </v-snackbar>
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
  background-size: cover;
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