<template>
  <div class="min-h-screen font-sans text-gray-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#1a0b2e] to-black">
    
    <nav class="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse group">
          <span class="text-3xl md:text-4xl group-hover:text-green-400 transition-colors duration-300" style="font-family: 'Creepster', cursive;">
            Rick&Morty <span class="text-green-400">App</span>
          </span>
        </NuxtLink>

        <div class="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button 
            @click="authStore.logout()" 
            class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-xs md:text-sm px-3 py-2 text-center shadow-lg shadow-green-500/50 transition-all"
          >
            Salir 🚪
          </button>
        </div>

        <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-row gap-4 font-medium p-4 md:p-0 mt-4 border border-gray-100/10 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NuxtLink to="/" class="block py-2 px-3 text-white rounded hover:text-green-400 transition-colors" active-class="text-green-400 font-bold">
                Explorar
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/favorites" class="block py-2 px-3 text-white rounded hover:text-blue-400 transition-colors" active-class="text-blue-400 font-bold">
                Favoritos
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <main class="container mx-auto p-4 pt-36 pb-12">
      <slot />
    </main>

  </div>
</template>

<script setup>
const authStore = useAuthStore();
</script>

<style>
/* Fuente global */
body {
  font-family: 'Inter', sans-serif;
}
</style>