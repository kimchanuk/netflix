import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieGenresQuery } from '../hooks/useMovieGenres';

export default function MoviesSlideItems({ movies }) {
  const {
    title,
    poster_path,
    id,
    genre_ids: genId,
    vote_average,
    adult,
  } = movies;

  const navigateDetail = () => {
    navigate(`/movie/${id}`, { state: { movies } });
  };

  const navigate = useNavigate();

  const { data: newGenId } = useMovieGenresQuery();
  const genArray = genId => {
    if (!newGenId) return [];
    const newGenIdList = genId.map(genId => {
      const Obj = newGenId.find(newGenId => newGenId.id == genId);
      return Obj.name;
    });
    return newGenIdList;
  };

  //genId [123,445]
  //newGenId [{id},{name}]
  //장르 데이터가 없으면 그냥 공백 리턴해
  //genre_ids에 map을 이용하여 순회할건데, (([18,20,80]이런 배열을 순회하는거임))
  //장르데이터에서 찾는다 find()요소를 순회하여 신규 장르데이터 id랑 기존장르id랑 같은거
  //변수를 리턴하는데 name만 리턴해줘 //[{id},{name}}]이 있는데 name만
  //최종적으로 선언했던 변수의 값을 리턴해줌

  return (
    <div
      onClick={navigateDetail}
      className='movieItems'
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}` +
          ')',
      }}
    >
      <div className='overLay p-4'>
        <h1>{title}</h1>

        <ul className='flex items-center gap-4'>
          <li>장르 : </li>
          {genArray(genId).map((genres, i) => (
            <li key={`key-${i}`}>{genres}</li>
          ))}
        </ul>

        <div>평점 : {vote_average}</div>
        <div>{adult ? '18세이상' : '전체관람가'}</div>
      </div>
    </div>
  );
}
