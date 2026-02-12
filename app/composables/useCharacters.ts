export const useCharacters = () => {
  const config = useRuntimeConfig();
  const page = ref(1);
  const search = ref('');
  const characters = ref([]);
  const info = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Función para obtener datos
  const fetchCharacters = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Construimos la URL con filtros
      const query = new URLSearchParams({
        page: page.value.toString(),
        name: search.value
      }).toString();

      const response: any = await $fetch(`${config.public.apiBase}/character?${query}`);
      
      characters.value = response.results;
      info.value = response.info;
    } catch (e: any) {
      error.value = e;
      characters.value = []; // Limpiar si no hay resultados
    } finally {
      loading.value = false;
    }
  };

  // Watchers para recargar si cambia página o búsqueda
  watch([page, search], () => {
    fetchCharacters();
  });

  return {
    page,
    search,
    characters,
    info,
    loading,
    error,
    fetchCharacters
  };
};