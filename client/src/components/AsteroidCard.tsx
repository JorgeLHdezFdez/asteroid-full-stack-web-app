import { useState } from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { Asteroid } from '../types/asteroid'

interface AsteroidCardProps {
  asteroid: Asteroid
  onAddToFavorites: (asteroid: Asteroid) => void
  isFavorite: boolean
}

const AsteroidCard = ({ asteroid, onAddToFavorites, isFavorite }: AsteroidCardProps) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            {asteroid.name}
          </Typography>
          <Typography color="text.secondary">ID: {asteroid.id}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            View Details
          </Button>
          <Button size="small" onClick={() => onAddToFavorites(asteroid)} color={isFavorite ? 'secondary' : 'primary'}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{asteroid.name}</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            <strong>Diameter:</strong> {asteroid.diameter.min.toFixed(2)} - {asteroid.diameter.max.toFixed(2)} km
          </Typography>
          <Typography gutterBottom>
            <strong>Potentially Hazardous:</strong> {asteroid.hazardous ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Close Approaches
          </Typography>
          {asteroid.closeApproachData.map((approach, index) => (
            <div key={index}>
              <Typography>Date: {approach.date}</Typography>
              <Typography>Velocity: {parseFloat(approach.velocity).toFixed(2)} km/h</Typography>
              <Typography>Miss Distance: {parseFloat(approach.distance).toFixed(2)} km</Typography>
              {index < asteroid.closeApproachData.length - 1 && <hr />}
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AsteroidCard
