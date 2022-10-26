import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movie from './pages/MoviePage';
import MovieList from './pages/MovieList';

//css
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:category" element={<MovieList />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
