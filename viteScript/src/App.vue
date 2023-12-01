<template>
  <div id="app2">
    <!-- <el-button type="primary">Primary</el-button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <!-- <router-link to="/about">abouts</router-link> -->
    <!-- <h1>Example heading <span class="badge bg-secondary">New{{ ele }} {{ a }} {{ arr3 }}</span></h1> -->
    <!-- <button type="button" class="btn btn-dark" @click="goSignIn()">登入</button> -->
    <router-view></router-view>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <About /> -->
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import About from '@/pages/About.vue'

import { useIndex } from '@/store/index'
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";
const router = useRouter();
const ele = ref<string>('www');
const a: Ref<string> = ref('a');

const arr = ref<string[]>(['1', '2']);
const arr2: Ref<string[]> = ref(['1', '2']);

interface Person {
  name: string;
  age: number;
  height: string
}
const arr3 = ref<Person[]>([
  {
    name: 'tony',
    age: 20,
    height: '175'
  }
]);

const bool = ref<boolean>(true);



const goSignIn = (): void => {
  let str: string = 'ert';
  console.log(str)

  interface Person2 {
    name: string;
    age: number;
    height2: string;
  }
  let obj: Person2 = {
    name: 'may',
    age: 40,
    height2: '160'
  }
  obj.height2 = '145';
  console.log(obj)

  ele.value = '2';
  a.value = '3';
  arr.value.push('3');
  arr2.value.push('3');
  bool.value = false;
  router.push("signIn");
}

const indexStore = useIndex()
console.log(indexStore)

const { name, counter } = storeToRefs(indexStore);
console.log(name.value)
console.log(counter.value)
counter.value += 1;

</script>

<style lang="scss" scoped>
#app2 {
  width: 100%;
  height: 100vh;
  border: 1px solid red;

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
