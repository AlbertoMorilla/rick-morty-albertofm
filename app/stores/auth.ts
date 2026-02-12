import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  // Usamos useCookie para persistencia simple como pide el requerimiento de "token"
  const token = useCookie('auth_token');
  const user = useState('user', () => null);

  const isAuthenticated = computed(() => !!token.value);

  function login(email: string) {
    // Simulamos un token
    token.value = btoa(email); // Token falso base64
    user.value = { email } as any;
    
    // Redirigir al dashboard
    return navigateTo('/');
  }

  function logout() {
    token.value = null;
    user.value = null;
    return navigateTo('/login');
  }

  return { token, user, isAuthenticated, login, logout };
});