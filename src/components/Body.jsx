import {react} from 'react'
import {Route,Routes,Link, BrowserRouter} from 'react-router-dom'
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight'

function Body() {
    


// ==========================================================

  return (
    
    <div className='container__body'>
        <BodyLeft/>
        <BodyRight/>
    </div>
        
  )
}

export default Body