import { useState, useEffect } from 'react'
import { Asteroid } from '../types/asteroid'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Asteroid[]>(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (asteroid: Asteroid) => {
    setFavorites(prev => {
      const exists = prev.some(fav => fav.id === asteroid.id)
      if (exists) {
        return prev.filter(fav => fav.id !== asteroid.id)
      }
      return [...prev, asteroid]
    })
  }

  const isFavorite = (id: string) => favorites.some(fav => fav.id === id)

  return { favorites, addToFavorites, isFavorite }
}