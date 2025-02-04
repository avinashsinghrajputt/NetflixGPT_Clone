import React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const MovieList = ({ title, movies }) => {
  if (movies === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <MovieListContainer className="px-6">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex space-x-4">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </MovieListContainer>
    );
  }
};

export default MovieList;