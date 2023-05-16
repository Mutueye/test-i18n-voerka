import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { initQstTheme } from '@itshixun/qst-ui-system';

import App from '@/App.vue';
import { router } from '@/router/index';
import pinia from '@/store';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'uno.css';

initQstTheme();

const app = createApp(App);

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');
