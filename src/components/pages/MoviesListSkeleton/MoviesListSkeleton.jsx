import { Skeleton, Stack } from '@mui/material';
import React from 'react';

export default function MoviesListSkeleton() {
  return (
    <>
      <Stack margin="auto" mt={1} width="100%">
        <Skeleton animation="wave" variant="rectangular" height="32px" />
      </Stack>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {new Array(15).fill(null).map((_, index) => (
          <Stack key={index} sx={{ m: 1 }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              height="322px"
              width="215px"
            />
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
          </Stack>
        ))}
      </Stack>
    </>
  );
}
