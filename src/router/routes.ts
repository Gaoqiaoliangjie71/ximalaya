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
    component: () => import('@/views/category/index.vue'),
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
    path: '/detail/:id',
    component: () => import('@/views/detail/index.vue'),
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