import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFavoritesStore } from '../stores/favorites'

describe('Favorites Store', () => {
  
  // Antes de cada test, reseteamos Pinia para empezar limpio
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('debe iniciar con una lista de favoritos vacía', () => {
    const store = useFavoritesStore()
    expect(store.favorites).toHaveLength(0)
  })

  it('debe poder añadir un personaje a favoritos', () => {
    const store = useFavoritesStore()
    const rick = { id: 1, name: 'Rick Sanchez', status: 'Alive' }
    
    store.addFavorite(rick)
    
    expect(store.favorites).toHaveLength(1)
    expect(store.favorites[0].name).toBe('Rick Sanchez')
  })

  it('no debe añadir duplicados', () => {
    const store = useFavoritesStore()
    const rick = { id: 1, name: 'Rick Sanchez' }
    
    store.addFavorite(rick)
    store.addFavorite(rick) // Intentamos añadirlo otra vez
    
    // Debería seguir habiendo solo 1, no 2
    expect(store.favorites).toHaveLength(1)
  })

  it('debe poder eliminar un favorito', () => {
    const store = useFavoritesStore()
    const rick = { id: 1, name: 'Rick Sanchez' }
    
    store.addFavorite(rick)
    store.removeFavorite(1)
    
    expect(store.favorites).toHaveLength(0)
  })
})