import { createApp } from 'vue'
import InstallElementPlus from './Plugin/ElementPlus/index'
import router from './router'
import App from './App.vue'

const app = createApp(App)
InstallElementPlus(app)
app.use(router).mount('#app')
