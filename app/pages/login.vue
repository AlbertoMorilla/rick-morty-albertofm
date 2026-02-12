<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center text-indigo-600">Bienvenido</h1>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            v-model="email" 
            type="email" 
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="test@test.com"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input 
            v-model="password" 
            type="password" 
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
          <p v-if="errorMsg" class="text-red-500 text-xs mt-1">{{ errorMsg }}</p>
        </div>

        <button 
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
        >
          Ingresar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// Desactivamos el layout default para el login
definePageMeta({ layout: false });

const email = ref('');
const password = ref('');
const errorMsg = ref('');
const authStore = useAuthStore();

const handleLogin = () => {
  // Validación requerida: password > 6 caracteres
  if (password.value.length <= 6) {
    errorMsg.value = 'La contraseña debe tener más de 6 caracteres.';
    return;
  }
  authStore.login(email.value);
};
</script>