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
      query: ({type, page}) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFilmsTopQuery } = kinopoiskApi; //useGetFilmsTopQuery -> 'useGet' +  'getFilmsTop' + 'Query'
