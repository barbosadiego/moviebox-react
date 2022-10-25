import React from 'react';

//Components
import Poster from '../components/Poster';
import SliderList from '../components/SliderList';

//env
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  return (
    <main>
      <Poster />
      <SliderList url={`${baseURL}movie/top_rated?${apiKey}`} />
    </main>
  );
};

export default Home;
