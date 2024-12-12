import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import 'bulma/css/bulma.min.css'
import { createPinia } from 'pinia';


const app = createApp(App)
const pinia = createPinia()
app.use(router);
app.use(pinia);
app.mount('#app');
