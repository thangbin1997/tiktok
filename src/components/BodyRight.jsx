import React from 'react'
import {Route,Routes,Link, BrowserRouter} from 'react-router-dom'
import ForYou from '../pages/ForYou.jsx'
import Folowing from '../pages/Folowing.jsx'
import Live from '../pages/Live.jsx'
import GoToTop from './GoToTop'
import style from '../access/style/body.scss'
import Profile from './Profile.jsx'


function BodyRight() {
  return (
    <div className="body__right">
            <Routes>
                <Route path="/tiktok/*"  element={<ForYou />}></Route>
                <Route path="/folowing" element={<Folowing />}></Route>
                <Route path="/live" element={<Live />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
            
            <GoToTop/>
        </div>
  )
}

export default BodyRight