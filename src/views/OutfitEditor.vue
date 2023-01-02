<template>
  <h1>Outfit Editor</h1><br>
  <h2>Click count: {{ clicks }}</h2>
  <button class="btn btn-primary" type="button" @click="clickCounter()">Click</button>
</template>

<script setup>
import { ref } from 'vue';

const clicks = ref(0)

const clickCounter = () => {
  clicks.value += 1
}
</script>

<style>
</style>
