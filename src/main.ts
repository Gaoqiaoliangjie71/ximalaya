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

import Vant from 'vant';

//头部组件
import Header from './components/heaader/index.vue'
//新人必听组件
import Listens from './components/listens/index.vue'
=======
>>>>>>> develop

const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);
app.use(Vant);
// app.use(Vant.Lazyload);

//组件
app.component('Header', Header)
app.component('Listens',Listens)

app.use(pinia);
app.use(router);
app.use(Vant);
app.mount('#app');
