import { createApp } from 'vue'
import App from './App.vue'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import router from './router/index'
import store from './store'

import axios from 'axios'
import env from './env'
axios.defaults.baseURL = env.axios.baseURL
axios.defaults.headers = env.axios.headers

import './style.css'

const app = createApp(App)
app.use(store)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(router)
app.config.globalProperties.$axios = axios
app.mount('#app')
