import React from 'react';
import { usePopularMoviesQuery } from '../../../hooks/usePopularMovies';

export default function HomeBanner() {
  const { isLoading, isError, data: netFlixData } = usePopularMoviesQuery();

  {
    isError && <p>{alert('에러남')}</p>;
  }
  {
    isLoading && <p className='text-3xl font-bold'>로딩중...</p>;
  }

  return (
    <section>
      {netFlixData && (
        <div
          style={{
            backgroundImage:
              'url(' +
              `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${netFlixData[9].poster_path}` +
              ')',
          }}
          className='banner'
        >
          <div className='bannerArea text-basic'>
            <h1 className='text-2xl font-extrabold mb-4'>
              {netFlixData[9].title}
            </h1>
            <p className='line-clamp-4'>{netFlixData[0].overview}</p>
          </div>
        </div>
      )}
    </section>
  );
}

// {netFlixData && (
//     <img
//       src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${netFlixData[19].poster_path}`}
//     />
//   )}
