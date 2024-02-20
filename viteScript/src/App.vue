<template>
  <div id="app2">
    <NavBar />
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
import { ref, Ref, onMounted } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import About from '@/pages/About.vue'
import NavBar from './components/NavBar.vue'

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

const obj = ref<object>({
  name: 'ton',
  age: 10
})
console.log(obj.value)



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



onMounted(() => {
  let bb: string = '調整';
  let aa: string = '哈哈哈哈開發';
  let cc: string = '開發2';
  let dd: string = '開發3';
  let ee: string = '調整2';
  class Person {
    //實例屬性
    name: string = '孫悟空';

    //類屬性加static可直接拿
    static age: number = 18;

    sayHello() {
      console.log('大家好')
    };

    static sayHello() {
      console.log('大家好2')
    };
  }
  const per = new Person();

  console.log(per.name);
  console.log(Person.age)
  Person.sayHello();

  let a: number;
  a = 10;
  // a = '1'
  console.log(a)

  let c: boolean = true;
  console.log(c)

  function sum(a: number, b: number): number {
    return a + b;
  }
  console.log(sum(1, 2))

  class Dog {
    name: string;
    age: number;

    //被稱為構造函數
    //構造函數會在對象創建時調用
    constructor(name: string, age: number) {
      //在實例方法中 this就表示當前的實例
      console.log(this)
      this.name = name;
      this.age = age;
    }

    bark() {
      //在方法中可以通過this來表示當前方法的對象
      console.log(this)
    }
  }
  const dog = new Dog('1', 3);
  console.log(dog)
  const dog2 = new Dog('2', 4);
  console.log(dog2)
  const dog3 = new Dog('3', 5);
  console.log(dog3)
  dog3.bark();

  const arr = [5, 9, 1, 3, 2, 6];
  arr.sort(function (a, b) {
    console.log(a,b)
    return a - b; // a - b > 0
  });


  //繼承寫法
  class Animal{
    name: string;
    age: number;

    constructor(name:string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log('動物在叫～');
    }
  }

  //定義一個表示狗的類
  //extends表示繼承
  //狗的類繼承Animal的類
  //此時Animal被稱為父類，Dogg為子類，繼承後，子類將擁有父類的所有方法和屬性
  //若子類中添加了與父類相同的方法，則子類方法會覆蓋掉父類的方法，這種形式稱為「方法的重寫」
  class Dogg extends Animal {
    run() {
      console.log(`${this.name}在跑～～～～～～`)
    }

    sayHello() {
      console.log('旺旺旺！');
    }
  }

  //定義一個表示貓的類
  //extends表示繼承
  class cat extends Animal {

  }

  const dogg = new Dogg('旺財', 5);
  console.log(dogg)
  dogg.sayHello();
  dogg.run();
  let asc;
  console.log('改遠端XXX分支')
})
</script>

<style lang="scss" scoped>
#app2 {
  width: 100%;
  height: 100vh;

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
