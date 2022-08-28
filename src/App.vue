<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <HelloWorld
    title="helloworld"
    :count="count"
  />
  {{ count }}
  <button @click="count++">
    +
  </button>
</template>
