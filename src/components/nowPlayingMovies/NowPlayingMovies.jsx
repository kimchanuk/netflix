import React from 'react';
import { useNowPlayingMovie } from '../../hooks/useNowPlayingMovie';
import MovieSlider from '../../common/MovieSlider';

export default function NowPlayingMovies() {
  const { isLoading, isError, data: nowPlaying } = useNowPlayingMovie();

  return (
    <div>
      {isLoading && <p>로딩중,,</p>}
      {isError && <p>에러..</p>}
      <MovieSlider netFlixData={nowPlaying} title={'현재 상영작'} />
    </div>
  );
}
