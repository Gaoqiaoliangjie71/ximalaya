import 'amfe-flexible'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
// import './style.css';
import App from './App.vue'
import ElementPlus from 'element-plus';
import Vant from 'vant';
import 'element-plus/dist/index.css';
<<<<<<< HEAD
// import './style.css';
import Vant from 'vant';
=======
<<<<<<< HEAD
// import './style.css';
=======
>>>>>>> e4f47490609e32e5ef51c5f2018b3dce3832428b

>>>>>>> 00950248c3ca5eeea988f3702748c6738fee81db

//头部组件
import Header from './components/heaader/index.vue'
//新人必听组件
import Listens from './components/listens/index.vue'

const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);
app.use(Vant);
<<<<<<< HEAD
=======
// app.use(Vant.Lazyload);

//组件
app.component('Header', Header)
app.component('Listens',Listens)

>>>>>>> 00950248c3ca5eeea988f3702748c6738fee81db
app.use(pinia);
app.use(router);
app.use(Vant);
app.mount('#app');
