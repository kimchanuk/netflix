import React from 'react';
import { useQuery } from 'react-query';
import { apiBase } from '../api/moveApi';

export const useNowPlayingMovie = () => {
  return useQuery({
    queryKey: ['nowPlaying'],
    queryFn: nowPlayingFn,
    select: nowPlaying => nowPlaying.data.results,
  });
};

async function nowPlayingFn() {
  return await apiBase.get('movie/now_playing', {
    params: {
      language: 'ko',
    },
  });
}
