import { useSelector } from 'react-redux';

import { TOP_LIST } from '../Data/MenuLists/navItems';
import {
  useGetFilmsQuery,
  useGetFilmsTopQuery,
} from '../services/kinopoiskAPI';

export default function useMoviesQuery() {
  const { page, counties, order, year } = useSelector(
    state => state.currentQuerySlice,
  );
  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LIST[0].value,
    page,
  });

  const responseBest = useGetFilmsTopQuery({
    type: TOP_LIST[1].value,
    page,
  });

  const responseFilms = useGetFilmsQuery({
    type: 'FILM',
    counties,
    generId: '1',
    order,
    year,
    page,
  });

  const responseSerials = useGetFilmsQuery({
    type: 'TV_SERIES',
    counties,
    generId: '1',
    order,
    year,
    page,
  });

  const responseCartoons = useGetFilmsQuery({
    type: 'FILM',
    counties,
    generId: '18',
    order,
    year,
    page,
  });

  const isLoading =
    responsePopular.isFetching ||
    responseBest.isFetching ||
    responseFilms.isFetching ||
    responseSerials.isFetching ||
    responseCartoons.isFetching;

  const hasError =
    responsePopular.error ||
    responseBest.error ||
    responseFilms.error ||
    responseSerials.error ||
    responseCartoons.error;

  return {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  };
}
