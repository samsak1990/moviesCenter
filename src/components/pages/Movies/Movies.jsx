import { Link, Stack } from '@mui/material';
import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { Router, Link as RouterLink } from 'react-router-dom';

import useMoviesQuery from '../../../Hooks/useMoviesQuery';
import ErrorMsg from '../../UI/ErrorMsg/ErrorMsg';
import MoviesSkeleton from './MoviesSkeleton';

export default function Movies() {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  } = useMoviesQuery();

  //TODO add skeleton
  if (isLoading) return <MoviesSkeleton />;

  //TODO add error component
  if (hasError) return <ErrorMsg />;

  const serializeDataForCarousel = data => {
    const serialaze = data.map(film => {
      return (
        <RouterLink to={`/movie/${film.kinopoiskId}`} key={film.kinopoiskId}>
          <div>
            <p>{film.name}</p>
            <img alt={film.name} src={film.posterUrlPreview} />
          </div>
        </RouterLink>
      );
    });
    return serialaze;
  };

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data.items),
    },
    {
      title: 'Лучшие фильмы',
      url: '/best',
      data: serializeDataForCarousel(responseBest.data.items),
    },
    {
      title: 'Фильмы',
      url: '/films',
      data: serializeDataForCarousel(responseFilms.data.items),
    },
    {
      title: 'Сериалы',
      url: '/serials',
      data: serializeDataForCarousel(responseSerials.data.items),
    },
    {
      title: 'Мультфильмы',
      url: '/cartoons',
      data: serializeDataForCarousel(responseCartoons.data.items),
    },
  ];

  return (
    <>
      {carouselArr.map((row, index) => (
        <div key={row.url}>
          <Stack>
            <Link
              sx={{ mt: 2, mb: 2 }}
              variant="h4"
              component={RouterLink}
              to={row.url}
            >
              {row.title}
            </Link>
            <InfiniteCarousel
              dots={false}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={5}
              slidesToShow={5}
              scrollOnDevice={true}
              autoCycle={true}
              cycleInterval={5000}
              pauseOnHover={true}
            >
              {row.data.map(film => film)}
            </InfiniteCarousel>
          </Stack>
        </div>
      ))}
    </>
  );
}
