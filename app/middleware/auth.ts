export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = AuthStore();
  
  // Si no tiene token, mandar al login
  if (!authStore.isAuthenticated) {
    return navigateTo('/login');
  }
});