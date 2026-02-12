export const useCharacters = () => {
  const config = useRuntimeConfig();
  const page = ref(1);
  const search = ref('');
  const characters = ref([]);
  const info = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchCharacters = async () => {
    loading.value = true;
    error.value = null;
    try {
      // ✅ Aquí conectamos con la API oficial
      // Usamos los filtros de pagina y nombre como pide el requisito
      const query = new URLSearchParams({
        page: page.value.toString(),
        name: search.value
      }).toString();

      // La URL base debe ser: https://rickandmortyapi.com/api
      const response: any = await $fetch(`https://rickandmortyapi.com/api/character?${query}`);
      
      characters.value = response.results;
      info.value = response.info;
    } catch (e: any) {
      error.value = e;
      characters.value = []; 
    } finally {
      loading.value = false;
    }
  };

  // Reactividad: Si cambia la página o la búsqueda, recargamos
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