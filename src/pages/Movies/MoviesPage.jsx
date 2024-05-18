import React, { useContext, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useMovieSearch';
import { keywordContext } from '../../context/keyWordContext';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieSlider from '../../common/MovieSlider';
import ReactPaginate from 'react-paginate';

export default function MoviesPage() {
  //파람없음 navigate('/movie?q=${keyword}')

  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');

  const [pageCount, setPageCount] = useState(1);

  const {
    isLoading,
    isError,
    data: movieSearch,
  } = useSearchMovieQuery(keyword, pageCount);

  const handlePageClick = page => {
    setPageCount(page.selected + 1);
  };

  return (
    <div>
      {isLoading && <p>로딩중~</p>}
      {isError && <p>Error</p>}

      <div>영화 필터 UI</div>

      <ul>
        <MovieSlider
          title={keyword ? keyword : '영화'}
          netFlixData={movieSearch?.data.results}
        />
      </ul>

      <ReactPaginate
        nextLabel='다음 >'
        previousLabel='< 이전'
        onPageChange={handlePageClick} //온체인지페이지 함수
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={movieSearch?.data.total_pages} //전체페이지 카운트
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
        forcePage={pageCount - 1}
      />
    </div>
  );
}
