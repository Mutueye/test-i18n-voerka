import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { initQstTheme } from '@itshixun/qst-ui-system';
import { VoerkaI18nScope } from '@/languages';
import { getCurrentLang } from './utils/i18nUtils';

import App from '@/App.vue';
import { router } from '@/router/index';
import pinia from '@/store';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'uno.css';

initQstTheme({ initialThemeIndex: 2 });

VoerkaI18nScope.change(getCurrentLang()).then(() => {
  const app = createApp(App);

  app.use(ElementPlus);
  app.use(pinia);
  app.use(router);
  app.mount('#app');
});
