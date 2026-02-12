import { useAuthStore } from '../stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  
  // Si no tiene token, mandar al login
  if (!authStore.isAuthenticated) {
    return navigateTo('/login');
  }
});