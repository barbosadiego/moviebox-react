import React, { useState, useEffect } from 'react';

import tomato from '../img/tomato-icon.png';
import imdb from '../img/imdb.png';
import play from '../img/Play.svg';

import './Poster.scss';

const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_API_IMG;

const Poster = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const data = await fetch(`${baseURL}movie/popular?${apiKey}`);
      const res = await data.json();

      setPopularFilms(res.results);
    }

    fetchMovie();
  }, []);

  return (
    <>
      {popularFilms.length > 0 &&
        popularFilms.map((film) => (
          <div key={film.id} className="film-poster">
            <img src={`${imgURL}w1280${film.backdrop_path}`} alt={film.title} />
            <div className="film-poster__info">
              <h2>{film.title}</h2>
              <div className="vote">
                <div>
                  <img className="icon" src={tomato} alt="vote average" />
                  {film.vote_average}
                </div>
                <div>
                  <img className="icon" src={imdb} alt="vote count" />
                  {film.vote_count}
                </div>
              </div>
              <p>{film.overview}</p>
              <button className="btn">
                <img className="icon" src={play} alt="" />
                watch trailer
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Poster;
