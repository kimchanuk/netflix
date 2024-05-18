import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../util/slide';

import MoviesSlideItems from './MoviesSlideItems';

export default function MovieSlider({ netFlixData, title }) {
  const slides = responsive;
  return (
    <div>
      <h2 className='text-5xl font-extrabold'>{title}</h2>
      {netFlixData && (
        <Carousel
          responsive={slides}
          centerMode={true}
          infinite={true}
          containerClass='carousel-container'
          itemClass='movie-slider p-1'
        >
          {netFlixData?.map((movies, index) => (
            <MoviesSlideItems movies={movies} key={index} />
          ))}
        </Carousel>
      )}
    </div>
  );
}
