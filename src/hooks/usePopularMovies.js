import { useQuery } from 'react-query';
import { apiBase } from '../api/moveApi';

const fetchPopularMovies = async () => {
  return await apiBase.get('movie/popular');
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
    select: res => res.data.results,
  });
};
