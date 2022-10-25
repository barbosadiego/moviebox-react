import React from 'react';

//Components
import Poster from '../components/Poster';

//Custom CSS
import './Home.scss';

const Home = () => {
  return (
    <main>
      <section className="poster-slider">
        <Poster />
      </section>
    </main>
  );
};

export default Home;
