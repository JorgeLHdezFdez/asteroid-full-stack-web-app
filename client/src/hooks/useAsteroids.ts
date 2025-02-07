import { useQuery } from '@tanstack/react-query'
import { getAsteroids } from '../services/api'
import { DateRange } from '../types/asteroid'

export const useAsteroids = (dateRange: DateRange) => {
  return useQuery({
    queryKey: ['asteroids', dateRange],
    queryFn: () => getAsteroids(dateRange),
    enabled: !!dateRange.startDate && !!dateRange.endDate,
  })
}
