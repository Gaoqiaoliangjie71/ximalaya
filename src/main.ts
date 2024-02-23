import 'amfe-flexible'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue'
import ElementPlus from 'element-plus';
import Vant from 'vant';
import 'element-plus/dist/index.css';

const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);
app.use(Vant);
// app.use(Vant.Lazyload);

app.use(pinia);
app.use(router);

app.mount('#app');
