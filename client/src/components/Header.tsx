import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Asteroid Tracker
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/asteroids">
            Asteroids
          </Button>
          <Button color="inherit" component={RouterLink} to="/favorites">
            Favorites
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header