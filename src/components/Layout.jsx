import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './UI/Footer/Footer';
import Navbar from './UI/Navbar/Navbar';

export default function Layout() {
  return (
    <Container fixed>
      <Box sx={{ padding: 4 }} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
