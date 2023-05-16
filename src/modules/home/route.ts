import { RouteRecordData } from '@/router/types';
import Home from './views/Home.vue';

const routeData: RouteRecordData = {
  admin: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        menuConfig: {
          iconClass: 'i-mdi-home',
          order: 0,
        },
      },
    },
  ],
};

export default routeData;
