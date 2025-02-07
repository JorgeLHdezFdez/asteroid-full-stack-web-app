import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import asteroidRoutes from '../src/routes/asteroidRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/asteroids', asteroidRoutes)

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app
