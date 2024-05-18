import { useQuery } from 'react-query';
import { apiBase } from '../api/moveApi';

export const useTopRatedQuery = () => {
  return useQuery({
    queryKey: ['topRated'],
    queryFn: topRatedFn,
    select: topRatedData => topRatedData.data.results,
  });
};

async function topRatedFn() {
  return await apiBase.get('movie/top_rated', {
    params: {
      language: 'ko',
    },
  });
}
