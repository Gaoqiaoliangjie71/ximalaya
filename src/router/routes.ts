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
<<<<<<< HEAD
    path: '/login',
    component: () => import('@/views/login/index.vue'),
=======
    path: '/detail',
    component: () => import('@/views/detail/index.vue'),
  },
  {
    path: '/search',
    component: () => import('@/views/search/index.vue'),
>>>>>>> e4f47490609e32e5ef51c5f2018b3dce3832428b
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