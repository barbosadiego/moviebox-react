import React from 'react';
import { useParams } from 'react-router-dom';

const MovieList = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>{category.replace('-', ' ')}</h1>
    </div>
  );
};

export default MovieList;
