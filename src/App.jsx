import React from 'react'
import {useState,useEffect,useRef,useMemo} from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import style from './App.scss'
import responsive from './access/style/responsiveMedium.scss'
import Profile from './components/Profile.jsx';



function App() {
  
  return (
      <div className='App'>
        <Header/>
        <Body/>
        {/* <Profile/> */}
      </div>    
  );
}
export default App;