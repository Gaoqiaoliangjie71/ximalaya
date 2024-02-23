import 'amfe-flexible'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
// import './style.css';
import App from './App.vue'
import ElementPlus from 'element-plus';
import Vant from 'vant';
import 'element-plus/dist/index.css';

//头部组件
import Header from './components/heaader/index.vue'
//新人必听组件
import Listens from './components/listens/index.vue'

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
<<<<<<< HEAD
app.use(Vant);
=======

>>>>>>> 943b22c3c807344730058bedb509b896137e724b
app.mount('#app');
