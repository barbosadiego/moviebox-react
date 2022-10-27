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
console.clear();

const SliderVideos = () => {
  const [videos, setVideos] = useState([]);
  const [idMovies, setIdMovies] = useState([]);

  useEffect(() => {
    getMoviesId().then((movies) => setIdMovies(movies));
  }, []);

  useEffect(() => {
    getVideos(idMovies[0]).then((res) =>
      setVideos(res.results.map((item) => item.key)),
    );
  }, [idMovies]);

  console.log(videos);

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
        // slidesPerView={4}
        spaceBetween={48}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          625: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
      >
        {videos.length > 0 &&
          videos.map((item) => (
            <SwiperSlide>
              <iframe
                width="auto"
                height="auto"
                src={`https://www.youtube.com/embed/${item}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default SliderVideos;
