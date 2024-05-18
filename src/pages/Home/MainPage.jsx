import React from 'react';
import HomeBanner from './components/HomeBanner';
import PopularMoviesSlides from '../../components/popularMoives/PopularMoviesSlides';
import NowPlayingMovies from '../../components/nowPlayingMovies/NowPlayingMovies';
import UpComing from '../../components/upComing/UpComing';
import TopRated from '../../components/topRated/TopRated';

export default function MainPage() {
  return (
    <>
      <HomeBanner />
      <PopularMoviesSlides />
      <NowPlayingMovies />
      <TopRated />
      <UpComing />
    </>
  );
}
