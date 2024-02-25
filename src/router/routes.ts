import type { RouteRecordRaw } from 'vue-router';

export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        // meta: {
        //   title: '首页',
        //   icon: 'ele-HomeFilled',
        // }
      },
      // {
      //   path: '/',
      //   redirect: '/home',
      //   meta: {
      //     hidden: true
      //   }
      // }
    ],
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/rank',
    component: () => import('@/views/rank/index.vue'),
  },
  {
    path: '/category',
    component: () => import('@/views/category/index.vue')
  },
  {
    path: '/category/list/:id/:title',
    component: () => import('@/views/category/list/index.vue'),
  },
  {
    path: '/listen',
    component: () => import('@/views/listen/index.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    // 跳转时传入作品id（albumId/id）
    path: '/detail/:id',
    component: () => import('@/views/detail/index.vue'),
  },
  {
    // 打开APP跳出的页面
    path: '/open',
    component: () => import('@/views/open/index.vue'),
  },
  {
    path: '/search',
    component: () => import('@/views/search/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Any',
    component: () => import('@/views/error/404.vue'),
    meta: {
      hidden: true,
    },
  }
];
export const anyRoute = {
  path: '/:pathMatch(.*)',
  name: 'Any',
  redirect: '/404',
  component: () => import('@/views/error/404.vue'),
  meta: {
    hidden: true,
  },
};