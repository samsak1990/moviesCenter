import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import ActorDetail from '../../components/pages/ActorDetail/ActorDetail';
import MovieDetail from '../../components/pages/MovieDetail/MovieDetail';
import Movies from '../../components/pages/Movies/Movies';
import MoviesListMain from '../../components/pages/MoviesListMain/MoviesListMain';
import MoviesListTop from '../../components/pages/MoviesListTop/MoviesListTop';
import { MOVIE_LISTS, TOP_LIST } from './MenuLists/navItems';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      {
        path: '/movie/:id',
        element: <MovieDetail />,
      },
      {
        path: '/actor/:id',
        element: <ActorDetail />,
      },
      ...TOP_LIST.map(item => {
        return { path: item.url, element: <MoviesListTop /> };
      }),
      ...MOVIE_LISTS.map(item => {
        return { path: item.url, element: <MoviesListMain /> };
      }),
    ],
  },
]);

export { router };
