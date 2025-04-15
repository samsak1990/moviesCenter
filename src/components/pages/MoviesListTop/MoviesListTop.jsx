import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { TOP_LIST } from '../../../Data/MenuLists/navItems';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskAPI';

export default function MoviesListTop() {
  const [page, setPage] = useState(1);

  const location = useLocation();
  const movieType = TOP_LIST.find(elem => elem.url === location.pathname);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page: page,
  });

  if (error) return <p>Some error</p>;
  if (isLoading) return <p>Please, wait!</p>;

  return <div>MoviesListTop</div>;
}
