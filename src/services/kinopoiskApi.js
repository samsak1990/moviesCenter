// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const kinopoiskApiKey = import.meta.env.VITE_KINOPOISK_API_KEY;

// Define a service using a base URL and expected endpoints
export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: headers => {
      headers.set('X-API-KEY', kinopoiskApiKey);
      headers.set('Content-Type', 'application/json');
    },
  }),
  endpoints: builder => ({
    getFilmsTop: builder.query({
      query: ({ type, page }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getFilms: builder.query({
      query: ({
        countries,
        generId,
        order = 'NUM_VOTE',
        type = 'FILM',
        year,
        page,
      }) =>
        `/v2.2/films?countries=${countries}&genres=${generId}&order=${order}&type=${type}&year=${year}&page=${page}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFilmsTopQuery, useGetFilmsQuery } = kinopoiskApi; //useGetFilmsTopQuery -> 'useGet' +  'getFilmsTop' + 'Query'
