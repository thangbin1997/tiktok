import React, { useState, useRef } from 'react'
import style from '../access/style/body.scss'
import {Route,Routes,Link, BrowserRouter} from 'react-router-dom'
import ForYou from '../pages/ForYou.jsx'
import Folowing from '../pages/Folowing.jsx'
import Tag from './Tag.jsx'
import Live from '../pages/Live.jsx'
import { AiFillHome } from "react-icons/ai";
import { BsPeople,BsCameraVideo } from "react-icons/bs";
import dataPropose from './datasPropose.jsx'
import dataFollow from './dataFollow.jsx'
import dataVideos from './dataVideos.jsx'
import LeftFooter from './BodyLeftFooter.jsx'


function Body() {
    var setTimeHover;
    const [dataProposes, setDataProposes] = useState(dataPropose)
    const [dataFollows, setDataFollows] = useState(dataFollow)
    const [checkFollow, setCheckFollow] = useState(true)
    const [checkElementHover, setCheckElementHover]= useState()

    const handleBtnFollow=(isFl, id)=>{
        // dataFollows[id-1].isFollow=!isFl
        // const test=dataFollows.filter(e=>{return e.id === id})
        // console.log(test.isFollow=!isFl)
        // setCheckFollow(!isFl)
    }



    // hover account left page
    const handleMouseOver=(id)=>{
            setCheckElementHover(id)
    }
    const handleMouseOut=()=>{
        setCheckElementHover()
    }
  return (
    <div className='container__body'>

        <div className="body__left">
            <div className="body__left__pages">
                    <ul className='body__left__pages-list'>
                        <li className='body__left__pages-list-item pages-active'>
                            <Link to="/tiktok"><AiFillHome className='pages-icon'/>
                                <p className="text">Dành cho bạn</p>
                            </Link>
                        </li>
                        <li className='body__left__pages-list-item'>
                            <Link to="/folowing"><BsPeople className='pages-icon'/>
                                <p className="text">Đang Follow</p>
                            </Link>
                        </li>
                        <li className='body__left__pages-list-item'>
                            <Link to="/live"><BsCameraVideo className='pages-icon'/>
                                <p className="text">LIVE</p>
                            </Link>
                        </li>
                    </ul>
            </div>

            <div className="body__left__dataPropose">
                <p className="body__left__dataPropose-title">Tài khoản được đề xuất</p>
                <ul className='body__left__dataProposes'>
                {
                    dataProposes.map((item,index)=>{
                        return(
                                <div key={item.id} className="dataProposes"
                                    onMouseOver={()=>handleMouseOver(item.id)}
                                    onMouseOut={()=>handleMouseOut()}
                                >
                                    <li className="dataPropose__item" >
                                    <a href="#">
                                        <div className="dataPropose__avatar">
                                            <img src={item.avatar} alt={item.names} />
                                        </div>
                                        <div className="dataPropose__info">
                                            <p className="dataPropose__info-nickname">
                                                {item.nickname}
                                            </p>
                                            <p className="dataPropose__info-name">
                                                {item.names}
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <div className={`data__review ${checkElementHover === item.id ? 'active' : ''}`} >
                                <div className='data__review-avatar'>
                                    <img src={item.avatar} alt={item.names} />
                                    <button className={`data__review-btn ${checkFollow || item.isFollow ? 'followed' : ''}`}
                                        onClick={()=>handleBtnFollow(item.isFollow,item.id)}
                                    >
                                        {` ${checkFollow || item.isFollow ? 'Đang Follow' : 'Follow'}`}
                                    </button>
                                </div>
                                <div className="data__review__info-text">
                                    <p className="dataPropose__info-nickname text-bold poiter">
                                        {item.nickname}
                                    </p>
                                    <p className="dataPropose__info-name poiter">
                                        {item.names}
                                    </p>
                                </div>
                                <div className="data__review-contact">
                                    <p className="data__review-contact-follower text-bold">{item.follower}</p>
                                        <p className="data__review-contact-text">Follower</p>
                                    <p className="data__review-contact-like text-bold">{item.like}</p>
                                        <p className="data__review-contact-text">Like</p>
                                </div>
                            </div>
                                </div>
                            )
                        })
                    }
                </ul>
                <p className='body__left__dataPropose-more'>Xem tất cả</p>
            </div>
{/* Dang follow */}
            <div className="body__left__dataPropose">
                <p className="body__left__dataPropose-title">Tài khoản đang Follow</p>
                <ul className='body__left__dataProposes'>
                {
                    dataFollows.map((item,index)=>{
                        return(
                            <div key={item.id} className="dataProposes" onMouseOver={(e)=>handleMouseOver(item.id)}
                            onMouseOut={()=>handleMouseOut()}>
                                <li className="dataPropose__item" 
                                
                                >
                                    <a href="#">
                                        <div className="dataPropose__avatar">
                                            <img src={item.avatar} alt={item.names} />
                                        </div>
                                        <div className="dataPropose__info">
                                            <p className="dataPropose__info-nickname">
                                                {item.nickname}
                                            </p>
                                            <p className="dataPropose__info-name">
                                                {item.names}
                                            </p>
                                        </div>

                                    </a>
                                </li>
                                <div className={`data__review ${checkElementHover === item.id ? 'active' : ''}`} >
                                    <div className='data__review-avatar'>
                                        <img src={item.avatar} alt={item.names} />
                                        <button className={`data__review-btn ${checkFollow || item.isFollow ? 'followed' : ''}`}
                                            onClick={()=>handleBtnFollow(item.isFollow,item.id)}
                                        >
                                            {` ${checkFollow || item.isFollow ? 'Đang Follow' : 'Follow'}`}
                                        </button>
                                    </div>
                                    <p className="dataPropose__info-nickname text-bold">
                                        {item.nickname}
                                    </p>
                                    <p className="dataPropose__info-name">
                                        {item.names}
                                    </p>
                                    <div className="data__review-contact">
                                        <p className="data__review-contact-follower text-bold">{item.follower}</p>
                                            <p className="data__review-contact-text">Follower</p>
                                        <p className="data__review-contact-like text-bold">{item.like}</p>
                                            <p className="data__review-contact-text">Like</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </ul>
                <p className='body__left__dataPropose-more'>Xem thêm</p>
            </div>
                <Tag dataVideo={dataVideos} />
                <LeftFooter/>
        </div>

        <div className="body__right">
            <Routes>
                <Route path="/tiktok"  element={<ForYou />}></Route>
                <Route path="/folowing" element={<Folowing />}></Route>
                <Route path="/live" element={<Live />}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Body