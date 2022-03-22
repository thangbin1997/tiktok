import React, { useState, useRef } from 'react'
import style from '../access/style/body.scss'
import {Route,Routes,Link, BrowserRouter} from 'react-router-dom'
import ForYou from '../pages/ForYou.jsx'
import Folowing from '../pages/Folowing.jsx'
import DataReview from './dataReview.jsx'
import Tag from './Tag.jsx'
import Live from '../pages/Live.jsx'
import { AiFillHome } from "react-icons/ai";
import { BsPeople,BsCameraVideo } from "react-icons/bs";
import dataPropose from './datasPropose.jsx'
import dataFollow from './dataFollow.jsx'
import dataVideos from './dataVideos.jsx'
import LeftFooter from './BodyLeftFooter.jsx'


function Body() {
    const [dataProposes, setDataProposes] = useState(dataPropose)
    const [dataFollows, setDataFollows] = useState(dataFollow)
    const [checkFollow, setCheckFollow] = useState(false)
    const [checkElementHover, setCheckElementHover]= useState(false)
    const [idMouseHover, setIdMouseHover]= useState(null)


    const handleBtnFollow=()=>{
        
    }

var setTime;
    // hover account left page
    const handleMouseEnter=(id)=>{
        setTime= setTimeout(()=>{
                setIdMouseHover(id)
                setCheckElementHover(true)
            },1000)
        }
    const handleMouseLeave=()=>{
        clearTimeout(setTime)
        setIdMouseHover(null)
        setCheckElementHover(false)
    }
  return (
    <div className='container__body'>

        <div className="container__body__left">

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
                    dataProposes.map((item)=>{
                        return(
                                <div key={item.id} className="dataProposes"
                                onMouseEnter={()=>handleMouseEnter(item.id)}
                                onMouseLeave={()=>handleMouseLeave()}
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

                                <DataReview key={item.id} id={item.id} avatar={item.avatar} names={item.names}
                                nickname={item.nickname} follower={item.follower} like={item.like} 
                                checkElementHover={checkElementHover} idMouseHover={idMouseHover}
                                />
                            
                            </div>
                            )
                        })
                    }
                </ul>
                <p className='body__left__dataPropose-more'>Xem tất cả</p>
            </div>
{/* Dang follow */}
            <div className="body__left__dataPropose body__left__dataFollow">
                <p className="body__left__dataPropose-title">Tài khoản đang Follow</p>
                <ul className='body__left__dataProposes'>
                {
                    dataFollows.map((item,index)=>{
                        return(
                            <div key={item.id} className="dataProposes">

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