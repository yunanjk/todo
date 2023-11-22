import { createApp } from 'vue';
// import { axios } from 'axios';
import App from './App.vue';
import store from './store/index';

createApp(App).use(store).mount('#app');

// const app = createApp(App);
// app.config.globalProperties.axios = axios; // axios 전역 설정
// app.use(store).use(axios).mount('#app');

