import { Box, Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import Post from './Post';
import PostsData from "../FakeData";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {PostsData.sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1)
            .map((item) => <Post item={item} key={item.id} />)}
        </>
      )}
    </Box>
  );
};

export default Feed;
