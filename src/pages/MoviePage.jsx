import React, { useState, useEffect } from 'react';

//router
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

//css
import './MoviePage.scss';

//env
const imgURL = import.meta.env.VITE_API_IMG;
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getFilm() {
      const data = await fetch(`${baseURL}/movie/${id}?${apiKey}`);
      const res = await data.json();
      setMovie(res);
    }

    getFilm();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  function formatNumber(number) {
    return Number(number).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  function formatDate(date) {
    return String(date).substring(0, 4);
  }

  return (
    <main>
      <section className="movie-page">
        <div className="img">
          <img src={`${imgURL}w1280${movie.backdrop_path}`} alt="" />
        </div>
        {movie.length === 0 && <Loading />}
        {movie && (
          <div className="container info">
            <h1>{movie.original_title}</h1>
            <p>Release: {formatDate(movie.release_date)}</p>
            <p>Bugdet: {formatNumber(movie.budget)} </p>
            <p className="overview">{movie.overview}</p>
            {movie.homepage && (
              <button className="btn">
                <a href={movie.homepage} target="_blank">
                  Homepage
                </a>
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default MoviePage;
