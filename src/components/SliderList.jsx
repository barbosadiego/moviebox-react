import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

// import required modules
import { Navigation } from 'swiper';

//components
import tomato from '../img/tomato-icon.png';
import imdb from '../img/imdb.png';

//css
import './SliderList.scss';

//env
const imgURL = import.meta.env.VITE_API_IMG;
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const SliderList = ({ url }) => {
  const [films, setFilms] = useState([]);

  const getFilms = async (url) => {
    const data = await fetch(url);
    const res = await data.json();
    setFilms(res.results);
  };

  useEffect(() => {
    getFilms(url);
  }, []);

  return (
    <section className="container">
      <div className="slider-list">
        <Swiper
          slidesPerView={4}
          spaceBetween={80}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          grabCursor={true}
          className="mySwiper"
        >
          {films.length > 0 &&
            films.map((film) => (
              <SwiperSlide key={film.id}>
                <div className="card">
                  <div className="img">
                    <img src={`${imgURL}w500/${film.poster_path}`} alt="" />
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderList;
