import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

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

  const serializeDataForCarousel = data => {
    const serialaze = data.map(film => {
      return (
        <div key={film.kinopoiskId}>
          <p>{film.name}</p>
          <img alt={film.name} src={film.posterUrlPreview} />
        </div>
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
  ];

  return (
    <div>
      <p>Main</p>
      <InfiniteCarousel
        dots={false}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        {carouselArr[0].data.map(film => film)}
      </InfiniteCarousel>
    </div>
  );
}
