import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper';

//components
import arrow from '../img/arrow-icon.svg';
import { getMoviesId, getVideos } from '../moviesData';

//css
import './SliderVideos.scss';
import { Link } from 'react-router-dom';

//env
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const SliderVideos = () => {
  const [videos, setVideos] = useState([]);
  const [idMovies, setIdMovies] = useState([]);

  useEffect(() => {
    getMoviesId().then((movies) => setIdMovies(movies));
  }, []);

  useEffect(() => {
    getVideos(idMovies[0]).then((res) =>
      setVideos(res.results.map((item) => item)),
    );
  }, [idMovies]);

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
      <Swiper
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          625: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 48,
          },
        }}
      >
        {videos.length > 0 &&
          videos.map((item) => (
            <SwiperSlide key={item.key}>
              <div className="card-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="title">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default SliderVideos;
