import { defineStore } from 'pinia';
import { ref, watch, onMounted } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<any[]>([]);

  // Cargar desde localStorage al iniciar (solo en cliente)
  onMounted(() => {
    const stored = localStorage.getItem('rm_favorites');
    if (stored) favorites.value = JSON.parse(stored);
  });

  // Guardar cada vez que cambia
  watch(favorites, (newVal) => {
    localStorage.setItem('rm_favorites', JSON.stringify(newVal));
  }, { deep: true });

  function addFavorite(character: any) {
    if (!favorites.value.find(c => c.id === character.id)) {
      favorites.value.push(character);
    }
  }

  function removeFavorite(id: number) {
    favorites.value = favorites.value.filter(c => c.id !== id);
  }

  function isFavorite(id: number) {
    return favorites.value.some(c => c.id === id);
  }

  return { favorites, addFavorite, removeFavorite, isFavorite };
});