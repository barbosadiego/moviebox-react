import React from 'react';

//css
import './CardMovie.scss';

//components
import tomato from '../img/tomato-icon.png';
import imdb from '../img/imdb.png';

//env
const imgURL = import.meta.env.VITE_API_IMG;
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const CardMovie = ({ film }) => {
  return (
    <div className="card">
      <div className="img">
        {film.poster_path ? (
          <img src={`${imgURL}w500/${film.poster_path}`} alt={film.title} />
        ) : (
          <img src="https://via.placeholder.com/250x375.png?text=No+Image" />
        )}
      </div>
      <span>{film.release_date.substring(0, 4)}</span>
      <h3>{film.title}</h3>
      <div className="vote">
        <div className="imdb">
          <img src={imdb} alt="" />
          {film.vote_count}
        </div>
        <div className="tomato">
          <img src={tomato} alt="" />
          {film.vote_average}
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
