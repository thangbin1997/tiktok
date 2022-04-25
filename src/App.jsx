import React from 'react'
import {useState,useEffect,useRef,useMemo} from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import style from './App.scss'
import responsive from './access/style/responsiveMedium.scss'
import Profile from './components/Profile.jsx';
import { useSelector } from "react-redux";
// container__full  onChange={handleChange}


function App() {
  const [value, setValue] = React.useState(false);
  const FullWidth = useSelector((state)=>state.isFullWidth)
  console.log(useSelector((state)=>state.isFullWidth));
  function handleChange(e) {
    console.log(e);
    setValue(e);
  }
  return (
      <div className={`App ${FullWidth && 'container__full'}`}>
          <Header/>
          <Body value={value} containerFull={handleChange}/>
      </div>    
  );
}
export default App;