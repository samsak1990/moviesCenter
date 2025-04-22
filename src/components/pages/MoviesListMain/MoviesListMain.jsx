import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { MOVIE_LISTS } from '../../../Data/MenuLists/navItems';
import { useGetFilmsQuery } from '../../../services/kinopoiskAPI';
import ErrorMsg from '../../UI/ErrorMsg/ErrorMsg';
import MoviesList from '../../UI/MoviesList/MoviesList';
import MoviesListSkeleton from '../MoviesListSkeleton/MoviesListSkeleton';

export default function MoviesListMain() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { countries, order, year, generId } = useSelector(
    state => state.currentQuerySlice,
  );
  const location = useLocation();

  const movieType = MOVIE_LISTS.find(el => el.url === location.pathname);

  const { data, error, isLoading } = useGetFilmsQuery({
    type: movieType.value,
    countries,
    order,
    year,
    generId: movieType.url === '/cartoons' ? 18 : generId,
    page,
  });

  useLayoutEffect(() => {
    setPage(1);
  }, [location]);

  if (error) return <ErrorMsg />;
  if (isLoading) return <MoviesListSkeleton />;

  return (
    <>
      <Stack flexDirection="row" sx={{ mt: 2, mb: 2 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => {
            navigate(-1);
          }}
        />
        <Typography variant="h4">{movieType.title}</Typography>
      </Stack>
      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      ></MoviesList>
    </>
  );
}
