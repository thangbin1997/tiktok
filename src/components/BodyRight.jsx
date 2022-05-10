import {Fragment,React} from 'react'
import {Route,Routes} from 'react-router-dom'
import ForYou from '../pages/ForYou.jsx'
import Folowing from '../pages/Folowing.jsx'
import Live from '../pages/Live.jsx'
import GoToTop from './GoToTop'
import style from '../access/style/body.scss'
import Profile from './Profile.jsx'
import UpLoad from '../pages/UpLoad.jsx'


function  BodyRight(props) {
  // console.log(props);

  return (
    <div className="body__right">
            <Routes>
                <Route path="/tiktok/*"  element={<ForYou/>}></Route>
                <Route path="/folowing" element={<Folowing />}></Route>
                <Route path="/live" element={<Live />}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Fragment>
                    <Route path='upLoad' element={<UpLoad/>}/>
                </Fragment>
            </Routes>
            <GoToTop/>
        </div>
  )
}

export default BodyRight