import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movie from './pages/Movie';

import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/movie/:id' element={ <Movie />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
