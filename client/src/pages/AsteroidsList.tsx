import { useState } from 'react'
import { Container, Grid, TextField, Box, CircularProgress, Alert } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { format } from 'date-fns'
import { useAsteroids } from '../hooks/useAsteroids'
import { useFavorites } from '../hooks/useFavorites'
import AsteroidCard from '../components/AsteroidCard'

const AsteroidsList = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(new Date())

  const dateRange = {
    startDate: startDate ? format(startDate, 'yyyy-MM-dd') : '',
    endDate: endDate ? format(endDate, 'yyyy-MM-dd') : '',
  }

  const { data: asteroids, isLoading, error } = useAsteroids(dateRange)
  const { addToFavorites, isFavorite } = useFavorites()

  const sortedAsteroids = asteroids?.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
            slotProps={{ textField: { variant: 'outlined' } }}
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={setEndDate}
            slotProps={{ textField: { variant: 'outlined' } }}
          />
        </Box>
      </LocalizationProvider>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          Error loading asteroids. Please try again later.
        </Alert>
      )}

      <Grid container spacing={3}>
        {sortedAsteroids?.map(asteroid => (
          <Grid item key={asteroid.id} xs={12} sm={6} md={4}>
            <AsteroidCard asteroid={asteroid} onAddToFavorites={addToFavorites} isFavorite={isFavorite(asteroid.id)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default AsteroidsList