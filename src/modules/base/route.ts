import { RouteRecordData } from '@/router/types';
import Base from './views/Base.vue';
import { t } from '@/languages';

const routeData: RouteRecordData = {
  base: [
    {
      path: '/base',
      name: 'base',
      component: Base,
      meta: {
        title: t('基础页面框架'),
      },
    },
  ],
};

export default routeData;
