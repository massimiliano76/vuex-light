import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ImagePlaceholder from '../components/ImagePlaceholder.vue'
import './index.css'

const app = createApp(App)
app.config.globalProperties.$store = store
app.use(router)
app.component('image-placeholder', ImagePlaceholder)
app.mount('#app')
