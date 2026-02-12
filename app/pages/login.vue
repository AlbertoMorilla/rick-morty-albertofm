<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    
    <div class="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#1a0b2e] to-black"></div>

    <div class="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all hover:scale-[1.01]">
      
      <div class="text-center mb-6 text-6xl animate-bounce">
        🛸
      </div>

      <h1 class="text-4xl font-bold mb-2 text-center text-green-400 tracking-wider" style="font-family: 'Creepster', cursive;">
        ACCESO <span class="text-blue-400">C-137</span>
      </h1>
      <p class="text-gray-300 text-center mb-8 text-sm">
        Introduce tus credenciales de la Ciudadela.
      </p>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-green-300 mb-1">Identificador (Email)</label>
          <input 
            v-model="email" 
            type="email" 
            required
            class="block w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder="rick.sanchez@citadel.com"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-green-300 mb-1">Código de Acceso (Pass)</label>
          <input 
            v-model="password" 
            type="password" 
            required
            class="block w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder="••••••••"
          >
          <p v-if="errorMsg" class="text-red-400 text-xs mt-2 bg-red-900/30 p-2 rounded border border-red-500/50">
            ⚠️ {{ errorMsg }}
          </p>
        </div>

        <button 
          type="submit"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-black bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition hover:-translate-y-1"
        >
          ABRIR PORTAL 🌀
        </button>
      </form>
      
      <div class="mt-6 text-center">
        <p class="text-xs text-gray-500">
          ¿Olvidaste tu dimensión de origen? <span class="text-blue-400 cursor-pointer hover:underline">Contactar soporte galáctico.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Desactivamos el layout default para que el login ocupe toda la pantalla limpia
definePageMeta({
  layout: false
});

const email = ref('');
const password = ref('');
const errorMsg = ref('');
const authStore = useAuthStore();

const handleLogin = () => {
  // Validación requerida: password > 6 caracteres
  if (password.value.length <= 6) {
    errorMsg.value = 'Error: Contraseña insuficiente para viaje interdimensional (>6 caracteres).';
    return;
  }
  authStore.login(email.value);
};
</script>