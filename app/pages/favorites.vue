<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Mis Favoritos ❤️</h1>
    
    <div v-if="favorites.length === 0" class="text-center py-10 bg-white rounded shadow p-8">
      <p class="text-gray-500">Aún no tienes favoritos.</p>
      <NuxtLink to="/" class="text-indigo-600 hover:underline mt-2 block">Volver al Dashboard</NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CharacterCard 
        v-for="char in favorites" 
        :key="char.id" 
        :character="char" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '~/stores/favorites';
import { storeToRefs } from 'pinia';

definePageMeta({
  middleware: 'auth'
});

const favStore = useFavoritesStore();
const { favorites } = storeToRefs(favStore);
</script>