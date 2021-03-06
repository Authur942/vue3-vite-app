import { createApp } from 'vue'
import InstallElementPlus from './Plugin/element'
import './assets/icon.css'
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)
InstallElementPlus(app)
app.use(router).use(store).mount('#app')
