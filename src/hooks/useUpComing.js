import { useQuery } from 'react-query';
import { apiBase } from '../api/moveApi';

export const useUpComingQuery = () => {
  return useQuery({
    queryKey: ['upComing'],
    queryFn: UpComingFn,
    select: upComingData => upComingData.data.results,
  });
};

const UpComingFn = () => {
  return apiBase.get('movie/upcoming', {
    params: {
      language: 'ko',
    },
  });
};
