import React from 'react';
import { RouterProvider } from 'react-router-dom';

import '../global/css/reset.css';

import { router } from '../Data/Routes/routers.jsx';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
