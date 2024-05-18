import { useQuery } from 'react-query';
import { apiBase } from '../api/moveApi';

//커스텀훅스 = 리엑트 쿼리를 생성 + 베이스를get하고, params를 불러올 훅스
//apiBase = baseUrl과 API_KEY를 분리한 로직

//BASEURL과KEY가 있으니 다른 api를 호출하고 싶으면 훅을 생성하여 데이터만 불러오면된다.

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
    select: popular => popular.data.results,
  });
};

const fetchPopularMovies = async () => {
  return await apiBase.get('movie/popular', {
    params: {
      language: 'ko',
      page: 1,
    },
  });
};
