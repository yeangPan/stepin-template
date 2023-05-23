import { Layout } from 'ant-design-vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    meta: {
      title: '首页',
      renderMenu: false,
      icon: 'CreditCardOutlined',
    },
  },
  {
    path: '/front',
    name: '前端',
    meta: {
      renderMenu: false,
    },
    component: () => import('@/components/layout/FrontView.vue'),
    children: [
      {
        path: '/login',
        name: '登录',
        meta: {
          icon: 'LoginOutlined',
          view: 'blank',
          target: '_blank',
          cacheable: false,
        },
        component: () => import('@/pages/login'),
      },
      {
        path: '/home',
        name: '首页',
        meta: {
          view: 'blank',
        },
        component: () => import('@/pages/home'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    props: true,
    meta: {
      icon: 'CreditCardOutlined',
      renderMenu: false,
      cacheable: false,
      _is404Page: true,
    },
    component: () => import('@/pages/Exp404.vue'),
  },
  {
    name: '工作台',
    path: '/workplace',
    meta: {
      // name: 'workplace',
      title: '工作台',
      icon: 'DashboardOutlined',
      // badge: 'new',
      target: '_self',
      renderMenu: true,
      parent: null,
      permission: null,
      cacheable: true,
    },
    component: () => import('@/pages/workplace'),
  },
  {
    path: '/project',
    name: '工程项目',
    // renderMenu: false,
    meta: {
      icon: 'ProjectOutlined',
      target: '_self',
      renderMenu: true,
      parent: null,
      permission: null,
      cacheable: true,
    },
    children: [
      {
        path: 'gits', // 相对路径
        name: '入库项目',
        meta: {
          icon: 'CloudUploadOutlined',
          permission: null,
          cacheable: true,
        },
        component: () => import('@/pages/gits'),
      },
      {
        path: 'gitrecs', // 相对路径
        name: '入库记录',
        meta: {
          icon: 'MenuOutlined',
        },
        component: () => import('@/pages/gitrecs'),
      },
    ],
    component: () => import('@/components/layout/BlankView.vue'),
  },
  {
    name: '个人中心',
    path: '/personal',
    meta: {
      // name: 'workplace',
      icon: 'ProfileOutlined',
      // badge: 'new',
      target: '_self',
      renderMenu: true,
      parent: null,
      permission: null,
      cacheable: true,
    },
    component: () => import('@/pages/personal'),
  },

  {
    path: '/system',
    name: '系统配置',
    // renderMenu: false,
    meta: {
      icon: 'SettingOutlined',
      target: '_self',
      renderMenu: true,
      parent: null,
      permission: null,
      cacheable: true,
    },
    children: [
      {
        path: 'menu', // 相对路径
        name: '菜单管理',
        meta: {
          icon: 'CloudUploadOutlined',
          permission: null,
          cacheable: true,
        },
        component: () => import('@/pages/system'),
      },
      {
        path: 'user', // 相对路径
        name: '用户管理',
        meta: {
          icon: 'MenuOutlined',
        },
        component: () => import('@/pages/user'),
      },
    ],
    component: () => import('@/components/layout/BlankView.vue'),
  },

];

export default routes;
