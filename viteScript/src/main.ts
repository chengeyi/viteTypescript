import { createApp } from 'vue'
import router from "./router"
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')

