import React from 'react';
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';
import MovieSlider from '../../common/MovieSlider';

export default function PopularMoviesSlides() {
  const { isLoading, isError, data: popular } = usePopularMoviesQuery();

  return (
    <section>
      {isError && <p>{alert('에러남')}</p>}
      {isLoading && <p className='text-3xl font-bold'>로딩중...</p>}
      <div>
        <MovieSlider netFlixData={popular} title={'인기 영화'} />
      </div>
    </section>
  );
}
