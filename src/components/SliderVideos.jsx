import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

// import required modules
import { Navigation } from 'swiper';

//components
import arrow from '../img/arrow-icon.svg';

//css
import './SliderVideos.scss';
import { Link } from 'react-router-dom';

//env
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const SliderVideos = () => {
  const [videos, setVideos] = useState([]);
  const [idMovies, setIdMovies] = useState([]);

  const getIdMovies = async () => {
    const data = await fetch(`${baseURL}movie/now_playing?${apiKey}`);
    const res = await data.json();
    setIdMovies(res.results.map((item) => item.id));
  };

  const getVideos = async (id) => {
    const data = await fetch(`${baseURL}movie/${id}/videos?${apiKey}`);
    const res = await data.json();
    console.log(res.results.map((item) => item.key));
  };

  useEffect(() => {
    getIdMovies();
    if (idMovies.length > 0) {
      console.log(idMovies);
      idMovies.forEach((movie) => getVideos(movie));
    }
  }, []);

  return (
    <section className="container videos">
      <div className="title">
        <h1>Exclusive Videos</h1>
        <Link className="link" to={`/`}>
          See more{' '}
          <span>
            <img src={arrow} alt="" />
          </span>
        </Link>
      </div>
      {/* <iframe
        width="450"
        height="253"
        src="https://www.youtube.com/embed/h3pzPSgaZzg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
    </section>
  );
};

export default SliderVideos;
