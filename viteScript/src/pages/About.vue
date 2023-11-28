<template>
    <h1>{{ msg }}</h1>
    <p>{{ name }}</p>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useIndex } from '@/store/index'
import { storeToRefs } from 'pinia';

const indexStore = useIndex()
console.log(indexStore)

const { name, counter } = storeToRefs(indexStore);
console.log(name.value)
console.log(counter.value)

const msg = ref<string>('About Page')
</script>
  
<style scoped></style>