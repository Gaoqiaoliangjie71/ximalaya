import 'amfe-flexible'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
<<<<<<< HEAD
// import './style.css';
=======
>>>>>>> develop
import App from './App.vue'
import ElementPlus from 'element-plus';
import Vant from 'vant';
import 'element-plus/dist/index.css';
<<<<<<< HEAD
// import './style.css';
import Vant from 'vant';
=======
>>>>>>> develop

const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);
app.use(Vant);
<<<<<<< HEAD
=======
// app.use(Vant.Lazyload);
>>>>>>> develop

app.use(pinia);
app.use(router);
app.mount('#app');
