import { useQuery } from 'react-query';
import { apiBase } from '../api/moveApi';

export const useMovieGenresQuery = () => {
  return useQuery({
    queryKey: ['movieGenres'],
    queryFn: movieGenresFn,
    select: genresData => genresData.data.genres,
    staleTime: 1000 * 60 * 5,
  });
};

const movieGenresFn = () => {
  return apiBase.get('genre/movie/list', {
    params: {
      language: 'ko',
    },
  });
};
