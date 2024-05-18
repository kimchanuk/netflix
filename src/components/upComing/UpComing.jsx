import React from 'react';
import { useUpComingQuery } from '../../hooks/useUpComing';
import MovieSlider from '../../common/MovieSlider';

export default function UpComing() {
  const { isLoading, isError, data: upComingData } = useUpComingQuery();

  return (
    <div>
      {isLoading && <p>로딩중,,,</p>}
      {isError && <p>에러남</p>}
      <MovieSlider netFlixData={upComingData} title={'개봉 예정작'} />
    </div>
  );
}
