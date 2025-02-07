import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        width: '100vw',
        height: '90vh',
        background: 'url("https://images-api.nasa.gov/asset/as11-40-5874")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: 'center',
            backgroundColor: 'rgba(74, 116, 215, 0.7)',
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Asteroids NASA
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Explore Near-Earth Objects with NASA's Database
          </Typography>
          <Button variant="contained" size="large" onClick={() => navigate('/asteroids')} sx={{ mt: 4 }}>
            Enter
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
