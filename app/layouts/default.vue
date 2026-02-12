<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <nav class="bg-indigo-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold">RickApp 🥒</NuxtLink>
        <div class="flex gap-4">
          <NuxtLink to="/" class="hover:text-indigo-200">Dashboard</NuxtLink>
          <NuxtLink to="/favorites" class="hover:text-indigo-200">Favoritos</NuxtLink>
          <button @click="authStore.logout()" class="bg-indigo-800 px-3 py-1 rounded hover:bg-indigo-900">Salir</button>
        </div>
      </div>
    </nav>
    
    <main class="container mx-auto p-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
const authStore = useAuthStore();
</script>