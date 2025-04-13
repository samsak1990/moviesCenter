import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import ActorDetail from '../../components/pages/ActorDetail/ActorDetail';
import MovieDetail from '../../components/pages/MovieDetail/MovieDetail';
import Movies from '../../components/pages/Movies/Movies';

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
    ],
  },
]);

export { router };
