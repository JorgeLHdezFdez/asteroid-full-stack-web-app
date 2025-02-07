import { Request, Response } from 'express'
import nasaService from '../services/nasaService'

export const getAsteroids = async (req: Request, res: Response) => {
  try {
    const startDate = req.query.start_date as string
    const endDate = req.query.end_date as string

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Start date and end date are required' })
    }

    const asteroids = await nasaService.getAsteroids({ startDate, endDate })
    res.json(asteroids)
  } catch (error) {
    console.error('Error in getAsteroids controller:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
