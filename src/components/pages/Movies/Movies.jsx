import React from 'react';

import useMoviesQuery from '../../../Hooks/useMoviesQuery';

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
  if (isLoading) return <p>Loading....</p>;

  //TODO add error component
  if (hasError) return <p>Error....</p>;

  const carouselArr = [
    {title:'Популярные фильмы', url: '/popular', data: }
  ]
}
