<template>
  <div class="space-y-8">
    
    <div class="text-center space-y-3 py-6">
      <h1 class="text-5xl md:text-6xl text-white tracking-wider font-creepster" style="font-family: 'Creepster', cursive;">
        Wubba Lubba <span class="text-green-400">Dub Dub!</span>
      </h1>
      <p class="text-dark-200 text-lg">Explora el multiverso de personajes.</p>
      
      <div class="relative max-w-md mx-auto mt-6">
        <input 
          v-model="search" 
          @input="page = 1" 
          type="text" 
          placeholder="Buscar habitante..."
          class="block w-full px-6 py-4 rounded-full bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm transition-all"
        >
      </div>
    </div>

    <div v-if="loading" class="text-center py-20">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"></div>
      <p class="mt-4 text-green-400 font-mono">Abriendo portal dimensional...</p>
    </div>

    <div v-else-if="error || characters.length === 0" class="text-center py-12">
      <p class="text-xl text-slate-400">🚫 Nadie en este universo con ese nombre.</p>
      <button @click="search = ''; page = 1" class="mt-4 text-green-400 hover:underline">
        Ver todos de nuevo
      </button>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CharacterCard 
        v-for="char in characters" 
        :key="char.id" 
        :character="char" 
      />
    </div>

    <div v-if="!loading && info" class="flex justify-center items-center gap-6 pt-8 pb-12">
      <button 
        :disabled="!info.prev" 
        @click="page--"
        class="px-6 py-2 bg-slate-800 text-white rounded-lg border border-slate-600 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        ⬅️ Prev
      </button>
      
      <span class="text-white font-mono bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
        {{ page }} / {{ info.pages }}
      </span>
      
      <button 
        :disabled="!info.next" 
        @click="page++"
        class="px-6 py-2 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next ➡️
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
// 1. Configuraciones de la página
definePageMeta({
  middleware: 'auth'
});

// 2. Importamos la lógica del composable
const { 
  characters, 
  loading, 
  error, 
  page, 
  search, 
  info, 
  fetchCharacters 
} = useCharacters();

// 3. Cargamos los datos al montar el componente
onMounted(() => {
  fetchCharacters();
});
</script>