import React from 'react';
import Denomination from './Components/Denomination'
import logo from './logo.svg';
import './App.css';

const denominations = [1, 5, 10, 20, 50, 100, 200] ;

function App() {
  console.log(33%50)
  return (
    <Denomination denominations={denominations} />
  );
}

export default App;
