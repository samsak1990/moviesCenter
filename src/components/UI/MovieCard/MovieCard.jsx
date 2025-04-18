import { Box, Link as LinkMUI, Rating, Stack, Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <Stack sx={{ width: '215px' }}>
      <Link to={`/movie/${movie.kinopoiskId}`}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
          className={styles.img}
        />
      </Link>
      <LinkMUI
        component={Link}
        to={`/movie/${movie.kinopoiskId}`}
        underline="none"
        textAlign="center"
      >
        {movie.nameRu ? movie.nameRu : movie.nameEn}
      </LinkMUI>
      {movie.ratingKinopoisk && (
        <Stack alignItems="center">
          <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
            <Box>
              <Rating
                name="read-only"
                value={movie.ratingKinopoisk / 2}
                precision={0.1}
                readOnly
              />
            </Box>
          </Tooltip>
        </Stack>
      )}
    </Stack>
  );
}
