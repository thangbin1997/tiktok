import React from 'react'
import {useState,useEffect,useRef,useMemo} from 'react';
import {Route,Routes,Link, BrowserRouter} from 'react-router-dom'
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Profile from './components/Profile.jsx';
import { useSelector } from "react-redux";
import styleApp from './App.scss'
import styleBody from './access/style/body.scss'
import responsive from './access/style/responsiveMedium.scss'

//route
import GoToTop from './components/GoToTop.jsx';
import BodyLeft from './components/BodyLeft.jsx';
import BodyRight from './components/BodyRight.jsx';
import UpLoad from './pages/UpLoad.jsx';
import ForYou from './pages/ForYou.jsx';
import Folowing from './pages/Folowing.jsx';
import Live from './pages/Live.jsx';
import NotFound from './pages/NotFound.jsx';
import Message from './pages/Message.jsx';
//

function App() {
  const FullWidth = useSelector((state)=>state.isFullWidth)

  return (
    <div className={`App ${FullWidth && 'container__full'}`}>
          <Header/>
          {/* <Body/> */}
          <Routes>
              <Route path='/*' extrax element={<Body/>}>
                  <Route path="tiktok"  element={<ForYou/>}/>
                  <Route path="folowing" element={<Folowing />}/>
                  <Route path="live" element={<Live />}/>
                  <Route path="profile" element={<Profile/>}/>
              </Route>
              <Route path='upload'  element={<UpLoad/>}/>
              <Route path='message' element={<Message/>}/>
          </Routes>
          <GoToTop/>
          
      </div>    
  );
}
export default App;