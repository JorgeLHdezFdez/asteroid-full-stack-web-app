import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY'
const NASA_API_URL = 'https://api.nasa.gov/neo/rest/v1/feed'

export interface DateRange {
  startDate: string
  endDate: string
}

class NasaService {
  async getAsteroids({ startDate, endDate }: DateRange) {
    try {
      const response = await axios.get(NASA_API_URL, {
        params: {
          start_date: startDate,
          end_date: endDate,
          api_key: NASA_API_KEY,
        },
      })

      const asteroids = []
      for (const date in response.data.near_earth_objects) {
        asteroids.push(...response.data.near_earth_objects[date])
      }

      return asteroids.map((asteroid: any) => ({
        id: asteroid.id,
        name: asteroid.name,
        diameter: {
          min: asteroid.estimated_diameter.kilometers.estimated_diameter_min,
          max: asteroid.estimated_diameter.kilometers.estimated_diameter_max,
        },
        hazardous: asteroid.is_potentially_hazardous_asteroid,
        closeApproachData: asteroid.close_approach_data.map((approach: any) => ({
          date: approach.close_approach_date,
          velocity: approach.relative_velocity.kilometers_per_hour,
          distance: approach.miss_distance.kilometers,
        })),
      }))
    } catch (error) {
      console.error('Error fetching asteroids:', error)
      throw error
    }
  }
}

export default new NasaService()