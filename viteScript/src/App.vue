<template>
  <div id="app">
    <el-button type="primary">Primary</el-button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <router-link to="/about">abouts</router-link>
    <router-view></router-view>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <About /> -->
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import About from '@/pages/About.vue'

import { useIndex } from '@/store/index'
import { storeToRefs } from 'pinia';

const indexStore = useIndex()
console.log(indexStore)

const { name, counter } = storeToRefs(indexStore);
console.log(name.value)
console.log(counter.value)
counter.value += 1;

</script>

<style lang="scss" scoped>
#app {
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    border: 1px solid red;
  }
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
