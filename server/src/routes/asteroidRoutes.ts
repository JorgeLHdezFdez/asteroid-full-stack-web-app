import { Router } from 'express'
import { getAsteroids } from '../controllers/asteroidController'

const router = Router()

router.get('/', (req, res, next) => {
  getAsteroids(req, res).catch(next)
})

export default router
