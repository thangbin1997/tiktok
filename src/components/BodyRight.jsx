import {React} from 'react'
import {Route,Routes} from 'react-router-dom'
import ForYou from '../pages/ForYou.jsx'
import Folowing from '../pages/Folowing.jsx'
import Live from '../pages/Live.jsx'
import styleBody from '../access/style/body.scss'
import Profile from './Profile.jsx'


function  BodyRight(props) {

  return (
    <div className="body__right">
        <Routes>
            <Route path="/tiktok"  element={<ForYou/>}></Route>
            <Route path="/folowing" element={<Folowing />}></Route>
            <Route path="/live" element={<Live />}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
    </div>
  )
}

export default BodyRight