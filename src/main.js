import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import 'bulma/css/bulma.min.css'


const app = createApp(App)
app.use(router);
app.mount('#app');
