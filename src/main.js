import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import App from './App.vue'
import { createHead } from '@unhead/vue'


const app = createApp(App)
const head = createHead()

app.use(head)
app.use(MotionPlugin)
app.mount('#app')
