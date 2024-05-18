import { useQuery } from 'react-query';
import { apiBase } from '../api/moveApi';

export const useSearchMovieQuery = (keyword, pageCount) => {
  return useQuery({
    queryKey: ['movieSearch', keyword, pageCount],
    queryFn: () => searchFn(keyword, pageCount),
    // select: movieSearch => movieSearch.data.results,
  });
};

const searchFn = (keyword, pageCount) => {
  return keyword
    ? apiBase.get('search/movie', {
        params: {
          query: keyword,
          include_adult: true,
          language: 'ko',
          page: pageCount,
        },
      })
    : apiBase.get('movie/upcoming', {
        params: {
          language: 'ko',
          page: pageCount,
        },
      });
};
