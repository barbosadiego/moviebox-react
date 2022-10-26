import React from 'react';

//Components
import Poster from '../components/Poster';
import SliderList from '../components/SliderList';
import SliderVideos from '../components/SliderVideos';

//env
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  return (
    <main>
      <Poster />
      <SliderList
        url={`${baseURL}movie/top_rated?${apiKey}`}
        section="featured-movie"
        title="Featured Movie"
      />
      <SliderList
        url={`${baseURL}movie/now_playing?${apiKey}`}
        section="latest-movie"
        title="New Arrival"
      />
      <SliderVideos />
    </main>
  );
};

export default Home;
