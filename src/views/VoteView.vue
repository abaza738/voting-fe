<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
  <div id="vote">
    <h5>
      Session: <span class="session-id">{{ route.params.id }}</span>
    </h5>
  </div>
</template>

<style scoped>
#vote {
  padding-top: 0.5rem;
}
.session-id {
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  background-color: rgb(31, 29, 43);
  color: rgb(255, 251, 196);
  transition: 300ms;
}

.session-id:hover {
  background-color: rgb(51, 49, 73);
}

.session-id:active {
  background-color: rgb(66, 61, 97);
}
</style>
