import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

// 全局组件注册
import globalComponents from './plugins/globalComponents.js'
import './styles/main.css'

import 'uno.css'

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.use(globalComponents)
// 全局属性
app.config.globalProperties.$baseImagePath = '/image/'
app.mount('#app')
