import React, { useState, useEffect } from 'react';

//router
import { useParams } from 'react-router-dom';

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

  console.log(movie);

  function formatNumber(number) {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  return (
    <main>
      <section className="container movie-page">
        {movie && (
          <div>
            <img src={`${imgURL}original${movie.backdrop_path}`} alt="" />
            <h1>{movie.original_title}</h1>
            <p>Release: {movie.release_date}</p>
            <p>Bugde: US$ {movie.budget} </p>
            <p>{movie.overview}</p>
            {movie.homepage && (
              <button>
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
