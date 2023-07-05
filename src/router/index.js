import { createRouter, createWebHistory } from 'vue-router'
//import { useAuth } from '../stores/auth';
import { auth, redirectIfAuthenticated } from './guard';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      //component: () => import('@/layouts/Dashboard.vue'),
      //beforeEnter: auth,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        }
      ]
    },

    {
      path: '/login',
      component: () => import('@/layouts/Auth.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Login.vue'),
          name: 'login',
          beforeEnter: redirectIfAuthenticated,
        }
      ]
    },

    {
      path: '/cadastrar',
      component: () => import('@/layouts/Auth.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Register.vue'),
          name: 'register',
          beforeEnter: redirectIfAuthenticated,
        }
      ]
    },

    {
      path: '/verificar-email',
      component: () => import('@/layouts/Auth.vue'),
      children: [
        {
          path: '', 
          component: () => import('@/views/VerifyEmail.vue'),
          name: 'verifyEmail',
          beforeEnter: redirectIfAuthenticated,
        }
      ]
    },

    {
      path: '/esqueci-senha',
      component: () => import('@/layouts/Auth.vue'),
      children: [
        {
          path: '', 
          component: () => import('@/views/ForgotPassword.vue'),
          name: 'ForgotPassword',
          beforeEnter: redirectIfAuthenticated,
        }
      ]
    },

    {
      path: '/',
      component: () => import('@/layouts/Dashboard.vue'),
      beforeEnter: auth,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue'),
        }
      ]
    },

    {
      path: '/usuarios',
      component: () => import('@/layouts/Dashboard.vue'),
      beforeEnter: auth,
      children: [
        {
          path: '',
          name: 'users',
          component: () => import('@/views/admin/Users.vue'),
        }
      ]
    },

    {
      path: '/testes',
      component: () => import('@/layouts/Dashboard.vue'),
      beforeEnter: auth,
      children: [
        {
          path: '',
          name: 'tests',
          component: () => import('@/views/admin/Teste.vue'),
        }
      ]
    },

  ]
})

/* router.beforeEach((to, from, next) => {
  const authStore = useAuth()
    authStore.sanctum();
  next();
}) */

export default router
