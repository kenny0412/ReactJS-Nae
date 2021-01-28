import React, { useEffect } from 'react';
import './App.css';
import MainContainer from './components/mainContainer/mainContainer';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContainer/>
    </div>
  );
}

export default App;
