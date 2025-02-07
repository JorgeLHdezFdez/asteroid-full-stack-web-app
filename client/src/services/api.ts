import axios from 'axios'
import { Asteroid, DateRange } from '../types/asteroid'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const getAsteroids = async ({ startDate, endDate }: DateRange): Promise<Asteroid[]> => {
  const response = await api.get('/asteroids', {
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  })
  return response.data
}
