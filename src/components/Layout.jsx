import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './UI/Footer/Footer';
import Navbar from './UI/Navbar/Navbar';

export default function Layout() {
  return (
    <Container fixed>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
