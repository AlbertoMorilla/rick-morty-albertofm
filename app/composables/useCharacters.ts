import { ref, watch } from 'vue';

export const useCharacters = () => {
  const config = useRuntimeConfig();
  const page = ref(1);
  const search = ref('');
  // Nuevo filtro: status puede ser 'alive', 'dead', 'unknown' o '' para no filtrar
  const status = ref('');
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
      const params = new URLSearchParams();
      params.append('page', page.value.toString());
      if (search.value) params.append('name', search.value);
      if (status.value) params.append('status', status.value.toLowerCase());
      const query = params.toString();

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

  // Reactividad: Si cambia la página, la búsqueda o el status, recargamos
  watch([page, search, status], () => {
    fetchCharacters();
  });

  return {
    page,
    search,
    status,
    characters,
    info,
    loading,
    error,
    fetchCharacters
  };
};