import React from 'react'
import {useState,useEffect,useRef} from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import style from './App.scss'




function App() {
  
  return (
      <div className='App'>
        <Header/>
        <Body/>
      </div>    
  );
}


export default App;