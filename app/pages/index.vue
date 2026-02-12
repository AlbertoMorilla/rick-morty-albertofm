<template>
  <div>
    <div class="mb-8 flex justify-center">
      <input 
        v-model="search" 
        @input="page = 1" 
        type="text" 
        placeholder="Buscar personaje (ej: Rick)..."
        class="w-full max-w-lg px-4 py-2 border rounded-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      >
    </div>

    <div v-if="loading" class="text-center py-10">
      <p class="text-xl text-indigo-600 animate-pulse">Cargando personajes...</p>
    </div>

    <div v-else-if="error || characters.length === 0" class="text-center py-10">
      <p class="text-red-500">No se encontraron personajes.</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CharacterCard 
        v-for="char in characters" 
        :key="char.id" 
        :character="char" 
      />
    </div>

    <div v-if="!loading && info" class="flex justify-center gap-4 mt-8 pb-8">
      <button 
        :disabled="!info.prev" 
        @click="page--"
        class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded disabled:opacity-50 hover:bg-indigo-200"
      >
        Anterior
      </button>
      <span class="px-4 py-2 text-gray-600 font-medium">Página {{ page }}</span>
      <button 
        :disabled="!info.next" 
        @click="page++"
        class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded disabled:opacity-50 hover:bg-indigo-200"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth' // Protegemos esta ruta
});

const { 
  characters, 
  loading, 
  error, 
  page, 
  search, 
  info, 
  fetchCharacters 
} = useCharacters();

// Carga inicial
onMounted(() => {
  fetchCharacters();
});
</script>