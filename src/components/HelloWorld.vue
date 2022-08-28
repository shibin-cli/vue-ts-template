<script setup lang="ts">
import { watchEffect } from 'vue'

interface Props {
  title: string
  count: number
}
const props = defineProps<Props>()
const stop = watchEffect(() => {
  console.log(props.title)
  console.log(props.count)
})
setTimeout(() => {
  stop()
}, 3000)
</script>

<template>
  <h1 />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
