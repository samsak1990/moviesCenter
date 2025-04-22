import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ErrorMsg() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      margin="auto"
      textAlign="center"
    >
      <Typography variant="h6">
        Произошла ошибка при получении данных с сервера Kinopoisk.
      </Typography>
    </Box>
  );
}
