import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchDataFromApi } from './services/api';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './pages/home/Home';
import { Details } from './pages/details/Details';
import { SearchResult } from './pages/SearchResults/SearchResult';
import { Explore } from './pages/explore/Explore';
import { PageNotFound } from './pages/404/PageNotFound';
PageNotFound;
function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home);
  console.log(url);

  console.log(url);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
