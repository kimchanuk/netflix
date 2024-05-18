import React from 'react';
import { useTopRatedQuery } from '../../hooks/useTopRated';
import MovieSlider from '../../common/MovieSlider';

export default function TopRated() {
  const { isLoading, isError, data: topRatedData } = useTopRatedQuery();

  return (
    <div>
      {isLoading && <p>로딩중,,</p>}
      {isError && <p>에러났음</p>}
      <div>
        <MovieSlider netFlixData={topRatedData} title={'평점 높은 영화'} />
      </div>
    </div>
  );
}
