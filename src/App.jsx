import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import MovieList from './pages/MovieList';
import Search from './pages/Search';

//css
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies/:category" element={<MovieList />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
