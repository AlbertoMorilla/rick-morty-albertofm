<template>
  <div class="h-screen flex flex-col items-center justify-center bg-black text-white text-center p-4">
    <h1 class="text-9xl font-bold text-green-500 mb-4 font-creepster">404</h1>
    <p class="text-2xl mb-8">Te equivocaste de dimensión, Morty.</p>
    <img src="https://media.giphy.com/media/l41lFw057lAJQMxv2/giphy.gif" alt="Portal" class="w-64 rounded-full mb-8 shadow-lg shadow-green-500/50">
    <button @click="handleError" class="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition">
      Volver a casa (C-137)
    </button>
  </div>
</template>

<script setup>
const handleError = () => clearError({ redirect: '/' });
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
.font-creepster { font-family: 'Creepster', cursive; }
</style>