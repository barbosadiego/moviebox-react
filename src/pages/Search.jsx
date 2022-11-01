import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import CardMovie from '../components/CardMovie';

//css
import '../pages/Search.scss';

//env
const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_API_BASE_URL;
const imgURL = import.meta.env.VITE_API_IMG;

const Search = () => {
  const [q] = useSearchParams();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilm() {
      const data = await fetch(
        `${baseURL}search/movie?${apiKey}&query=${q.get('q')}`,
      );
      const res = await data.json();
      setFilms(res.results);
    }
    getFilm();
  }, [q]);

  return (
    <section className="search">
      <div className="container">
        <h1>Search: {q.get('q')}</h1>
        {films.length === 0 && (
          <h2 className="search__error">No results for you query.</h2>
        )}
        {films.length > 0 && (
          <div className="search__results">
            {films.map((film) => (
              <Link key={film.id} to={`/moviebox-react/movie/${film.id}`}>
                <CardMovie film={film} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
