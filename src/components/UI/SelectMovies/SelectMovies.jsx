import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import React from 'react';

const ordersList = [
  { title: 'Рейтин', value: 'RATING' },
  { title: 'Оценки', value: 'NUM_VOTE' },
];

const yearsList = new Array(60).fill(null).map((_, index) => ({
  title: new Date().getFullYear() - index,
  value: new Date().getFullYear() - index,
}));

export default function SelectMovies({
  countriesList,
  genresList,
  countries,
  order,
  year,
  generId,
}) {
  return (
    <Stack
      sx={{
        flexDirection: { sm: 'column', md: 'row' },
        gap: '20px',
        mb: '20px',
        alignItems: ' center',
      }}
    >
      <FormControl variant="filled" fullWidth size="small">
        <InputLabel>Сортировка</InputLabel>
        <Select label="order">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ordersList.map(order => (
            <MenuItem key={order.value} value={order.value}>
              {order.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" fullWidth size="small">
        <InputLabel>Страна</InputLabel>
        <Select label="counry">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {countriesList.map(country => (
            <MenuItem key={country.id} value={country.id}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" fullWidth size="small">
        <InputLabel>Жанр</InputLabel>
        <Select label="genre">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {genresList.map(genre => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="filled" fullWidth size="small">
        <InputLabel>Год</InputLabel>
        <Select label="year">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {yearsList.map(year => (
            <MenuItem key={year.value} value={year.value}>
              {year.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button variant="outlined" startIcon={<CloseIcon />}>
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
}
