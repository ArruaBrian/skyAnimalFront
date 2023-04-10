import { createApp } from 'vue';
import './style.scss';
import './resetCSS.scss';
import App from './App.vue';
import router from 'vue-router';

const app = createApp(App);

app.use(router);

app.mount('#app');
