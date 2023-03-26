import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrandContext } from './contexts';
import { initialData } from './constants';
import { Brands } from './components/Brands/Brands';

function App() {
  return (
    <div className="App">
      <BrandContext.Provider value={initialData}>
        <h1>Brand Orders</h1>
        <Brands />
      </BrandContext.Provider>
    </div>
  );
}

export default App;
