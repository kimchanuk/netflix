import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MovieDetail() {
  const {
    state: { movies: movieDetail },
  } = useLocation();

  console.log(movieDetail);

  return (
    <div>
      {movieDetail.title}

      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`}
      />
    </div>
  );
}
