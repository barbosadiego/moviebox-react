import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilms } from '../moviesData';

//env
const imgURL = import.meta.env.VITE_API_IMG;
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

//css
import './MovieList.scss';

function paramToFetch(str) {
  return String(str).replace('-', '_');
}

const MovieList = () => {
  const { category } = useParams();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms(`${baseURL}movie/${paramToFetch(category)}?${apiKey}`).then(
      (res) => setFilms(res.results),
    );
  }, []);

  return (
    <section className="category">
      <div className="container">
        <h1>{category.replace('-', ' ')}</h1>
        {films.length > 0 && (
          <div className="grid">
            {films.map((film) => (
              <Link to={`/moviebox-react/movie/${film.id}`} key={film.id}>
                <div className="grid__card">
                  <img src={`${imgURL}w300${film.poster_path}`} alt="" />
                  <div>{film.title}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieList;
