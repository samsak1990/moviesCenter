import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TOP_LIST } from '../../../Data/MenuLists/navItems';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskAPI';
import MoviesList from '../../UI/MoviesList/MoviesList';

export default function MoviesListTop() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const location = useLocation();
  const movieType = TOP_LIST.find(elem => elem.url === location.pathname);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page: page,
  });

  useEffect(()=>{
    setPage(1)
  }, [location])

  if (error) return <p>Some error</p>;
  if (isLoading) return <p>Please, wait!</p>;

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
