import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { MOVIE_LISTS } from '../../../Data/MenuLists/navItems';
import {
  useGetFilmsQuery,
  useGetGenresAndCountriesQuery,
} from '../../../services/kinopoiskAPI';
import ErrorMsg from '../../UI/ErrorMsg/ErrorMsg';
import MoviesList from '../../UI/MoviesList/MoviesList';
import SelectMovies from '../../UI/SelectMovies/SelectMovies';
import MoviesListSkeleton from '../MoviesListSkeleton/MoviesListSkeleton';

export default function MoviesListMain() {
  const responseGengesAndCountries = useGetGenresAndCountriesQuery();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { countries, order, year, generId } = useSelector(
    state => state.currentQuerySlice,
  );
  const location = useLocation();

  const movieType = MOVIE_LISTS.find(el => el.url === location.pathname);

  const responseFilms = useGetFilmsQuery({
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

  if (responseFilms.error || responseGengesAndCountries.error)
    return <ErrorMsg />;
  if (responseFilms.isLoading || responseGengesAndCountries.isLoading)
    return <MoviesListSkeleton />;

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
      <SelectMovies
        countriesList={responseGengesAndCountries.data.countries}
        genresList={responseGengesAndCountries.data.genres}
        countries={countries}
        order={order}
        year={year}
        generId={generId}
      />
      <MoviesList
        movies={responseFilms.data.items}
        totalPages={responseFilms.data.totalPages}
        page={page}
        setPage={setPage}
      ></MoviesList>
    </>
  );
}
