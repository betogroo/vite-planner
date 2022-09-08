import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home',
      requiresAuth: false
    }
  },
  {
    path: '/add',
    name: 'AddProject',
    component: () => import('@/views/AddProject.vue'),
    meta: {
      requiresAuth: false,
      title: 'Nova Tarefa'
    }
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: () => import('@/views/EditProject.vue'),
    props: true,
    meta: {
      requiresAuth: false,
      title: 'Editar Tarefa'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404',
      requiresAuth: false
    }
  }
]

export default routes
