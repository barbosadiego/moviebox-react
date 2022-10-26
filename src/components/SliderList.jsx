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
import './SliderList.scss';
import { Link } from 'react-router-dom';
import CardMovie from './CardMovie';

//env
const imgURL = import.meta.env.VITE_API_IMG;
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const SliderList = ({ url, section, title }) => {
  const [films, setFilms] = useState([]);

  const getFilms = async (url) => {
    const data = await fetch(url);
    const res = await data.json();
    setFilms(res.results);
  };

  useEffect(() => {
    getFilms(url);
  }, []);

  function urlTitle(str) {
    return str.toLowerCase().replace(' ', '-');
  }

  return (
    <section className={`container ${section ? section : ''}`}>
      <div className="slider-list">
        <div className="title">
          <h1>{title}</h1>
          <Link className="link" to={`/movies/${urlTitle(title)}`}>
            See more{' '}
            <span>
              <img src={arrow} alt="" />
            </span>
          </Link>
        </div>
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
                <CardMovie film={film} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderList;
