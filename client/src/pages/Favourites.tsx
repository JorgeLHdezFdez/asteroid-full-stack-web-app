import { Container, Grid, Typography, Box } from '@mui/material'
import { useFavorites } from '../hooks/useFavorites'
import AsteroidCard from '../components/AsteroidCard'

const Favorites = () => {
  const { favorites, addToFavorites, isFavorite } = useFavorites()

  return (
    <Container maxWidth="xl" sx={{ width: '100vw', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Favorite Asteroids
      </Typography>

      {favorites.length === 0 ? (
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography>No favorite asteroids yet.</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {favorites.map(asteroid => (
            <Grid item key={asteroid.id} xs={12} sm={6} md={4}>
              <AsteroidCard
                asteroid={asteroid}
                onAddToFavorites={addToFavorites}
                isFavorite={isFavorite(asteroid.id)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default Favorites
