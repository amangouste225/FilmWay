import './App.css';
import { useEffect } from 'react';
import { fetchDataFromApi } from './services/api';
import React from 'react';
function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res);
    });
  };

  return <div className='App'>App</div>;
}

export default App;
