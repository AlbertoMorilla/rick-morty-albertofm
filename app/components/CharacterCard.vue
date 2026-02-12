<template>
  <div class="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
    
    <div class="relative h-64 overflow-hidden">
      <img 
        :src="character.image" 
        :alt="character.name" 
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      >
      <span class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
        {{ character.species }}
      </span>
    </div>

    <div class="p-5">
      <h3 class="text-xl font-bold text-gray-800 truncate mb-1" :title="character.name">
        {{ character.name }}
      </h3>
      
      <div class="flex items-center mb-4">
        <span class="relative flex h-3 w-3 mr-2">
          <span 
            class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            :class="statusColor"
          ></span>
          <span 
            class="relative inline-flex rounded-full h-3 w-3"
            :class="statusColor"
          ></span>
        </span>
        <span class="text-sm font-medium text-gray-600">
          {{ character.status }}
        </span>
      </div>
      
      <button 
        @click="toggleFavorite"
        class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        :class="isFav 
          ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
      >
        <span class="text-lg">{{ isFav ? '❤️' : '🤍' }}</span>
        {{ isFav ? 'Quitar Favorito' : 'Añadir a Favoritos' }}
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

// Lógica de colores según estado
const statusColor = computed(() => {
  switch (props.character.status) {
    case 'Alive': return 'bg-green-500';
    case 'Dead': return 'bg-red-500';
    default: return 'bg-gray-400';
  }
});

const toggleFavorite = () => {
  if (isFav.value) {
    favStore.removeFavorite(props.character.id);
  } else {
    favStore.addFavorite(props.character);
  }
};
</script>