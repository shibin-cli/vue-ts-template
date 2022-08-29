<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <div>
    <router-link to="/">
      Home
    </router-link>
    |
    <router-link to="/about">
      About
    </router-link>
  </div>
  {{ count }}
  <button @click="count++">
    +
  </button>
  <router-view />
</template>
<style>
.flex {
  display: flex;
}
</style>
