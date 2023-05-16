import { RouteRecordData } from '@/router/types';
import Base from './views/Base.vue';

const routeData: RouteRecordData = {
  base: [
    {
      path: '/base',
      name: 'base',
      component: Base,
      meta: {
        title: '基础页面框架',
      },
    },
  ],
};

export default routeData;
