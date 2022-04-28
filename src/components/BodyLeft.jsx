import React, { useState, useRef,useEffect,useLayoutEffect } from 'react'
import {Route,Routes,Link, BrowserRouter} from 'react-router-dom'
import DataReview from './dataReview.jsx'
import Tag from './Tag.jsx'
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople,BsCameraVideo } from "react-icons/bs";
import dataPropose from './datasPropose.jsx'
import dataFollow from './dataFollow.jsx'
import dataVideos from './dataVideos.jsx'
import LeftFooter from './BodyLeftFooter.jsx'
import { useSelector, useDispatch } from "react-redux";
import {notFullWidth} from '../actions/IsFullWidth'

function BodyLeft() {
    const [dataProposes, setDataProposes] = useState(dataPropose)
    const [dataFollows, setDataFollows] = useState(dataFollow)
    const [checkElementHover, setCheckElementHover]= useState(false)
    const [idMouseHover, setIdMouseHover]= useState(null)
    const [size, setSize] = useState(0);
    const [isDataReview, setIsDataReview] = useState(false)
var setTime;

    // hover account left page
     function handleMouseEnter(id) {
        setTime = setTimeout(() => {
            setIdMouseHover(id)
            setCheckElementHover(true)
        }, 1000)
    }
      function handleMouseLeave(){
        clearTimeout(setTime)
        setTimeout(() => {
            setIdMouseHover(null)
            setCheckElementHover(false)
        }, 500);
    }
//set full width
const setNotFullWidth = useSelector((state)=>state.notFullWidth)       //useSelector redux
const dispatch= useDispatch()                                       //dispatch redux

//menu click
useEffect(() => {
    const menuItems= document.querySelectorAll(".body__left__pages-list-item")
    menuItems.forEach((menuItem)=>{
        menuItem.onclick=()=>{
            document.querySelector('.pages-active').classList.remove('pages-active')
            menuItem.classList.add('pages-active')
            dispatch(notFullWidth())
        }
    })
}, [])
// ==========================================================
useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
useLayoutEffect(()=>{
    if(size>1071){
        setIsDataReview(true)
    }
    else setIsDataReview(false)
})



  return (
        // <div className='container__body'>
        
            <div className="container__body__left">

                <div className="body__left">
            
                <div className="body__left__pages">
                        <ul className='body__left__pages-list'>
                            <li className='body__left__pages-list-item pages-active' >
                                <Link to="/tiktok"><AiOutlineHome className='pages-icon'/>
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
                                    {/* data review old */}
                                    {isDataReview && <DataReview key={item.id} id={item.id} avatar={item.avatar} names={item.names}
                                    nickname={item.nickname} follower={item.follower} like={item.like} 
                                    checkElementHover={checkElementHover} idMouseHover={idMouseHover}/>}
                                </div>
                                )
                            })
                        }
                    </ul>
                    <p className='body__left__dataPropose-more'>Xem tất cả</p>
                
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
                                    {/* datareview new */}
                                    {
                    dataProposes.map((item)=>{
                        return(
                        <div className='data__review__reposive__medium' key={item.id}>
                            {!isDataReview && <DataReview key={item.id} id={item.id} avatar={item.avatar} names={item.names}
                            nickname={item.nickname} follower={item.follower} like={item.like} 
                            checkElementHover={checkElementHover} idMouseHover={idMouseHover}/>}
                        </div>
                    )})
                }

                </div>
        // </div>
  )
}

export default BodyLeft