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

  return (
    <InfiniteCarousel
      dots={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      <div>
        <img
          alt=""
          src="https://cs13.pikabu.ru/avatars/3126/x3126308-1172376264.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://cs13.pikabu.ru/avatars/3126/x3126308-1172376264.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://cs13.pikabu.ru/avatars/3126/x3126308-1172376264.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://cs13.pikabu.ru/avatars/3126/x3126308-1172376264.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://cs13.pikabu.ru/avatars/3126/x3126308-1172376264.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://cs13.pikabu.ru/avatars/3126/x3126308-1172376264.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://cs13.pikabu.ru/avatars/3126/x3126308-1172376264.png"
        />
      </div>
    </InfiniteCarousel>
  );
}
