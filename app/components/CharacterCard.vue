<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img :src="character.image" :alt="character.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-bold text-gray-800 truncate">{{ character.name }}</h3>
      <div class="flex items-center mt-2">
        <span 
          class="h-3 w-3 rounded-full mr-2"
          :class="character.status === 'Alive' ? 'bg-green-500' : character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-400'"
        ></span>
        <span class="text-sm text-gray-600">{{ character.status }} - {{ character.species }}</span>
      </div>
      
      <button 
        @click="toggleFavorite"
        class="mt-4 w-full flex items-center justify-center px-4 py-2 border rounded-md transition-colors"
        :class="isFav ? 'bg-red-100 text-red-600 border-red-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
      >
        <span v-if="isFav">❤️ Quit Favoritos</span>
        <span v-else>🤍 Add Favoritos</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '~/stores/favorites';

const props = defineProps<{ character: any }>();
const favStore = useFavoritesStore();

// Computado para saber si es favorito
const isFav = computed(() => favStore.isFavorite(props.character.id));

const toggleFavorite = () => {
  if (isFav.value) {
    favStore.removeFavorite(props.character.id);
  } else {
    favStore.addFavorite(props.character);
  }
};
</script>