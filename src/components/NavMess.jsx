import React from 'react'
import {Link,Outlet,Route,Routes} from 'react-router-dom'
import navmessStyle from '../access/style/navmess.scss'
import { GoPrimitiveDot } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsFlag } from 'react-icons/bs';
import dataVideo from './dataVideos'


function NavMess() {

  const data= dataVideo.filter(item=>item.id <= 10)
  return (
    <div className='navmess'>
        <div className="mavmess__title">
            <h2>Thông báo</h2>
        </div>
        <div className="navmess__tab">
            <span className='navmess__tab--all  nav-tab navmess__tab--active'>Tất cả</span>
            <span className='navmess__tab--liked nav-tab '>Thích</span>
            <span className='navmess__tab--comment nav-tab '>Bình luận</span>
            <span className='navmess__tab--mention nav-tab '>Nhắc đến</span>
            <span className='navmess__tab--follower nav-tab '>Follower</span>
        </div>
        {/* navmess__tab--all */}
        <div className="navmess__tab--all--box">
                  {/* yeu cau follow */}
          <div className="navmess__tab--request--follow">
            <span>
              Yêu cầu follow
            </span>
            <div className="navmess__tab--all--request--follow-count">
                <GoPrimitiveDot className='red-dot-icon'/>
                <span>
                    16
                </span>
                <MdKeyboardArrowRight className='right-arrow-icon'/>
            </div>
          </div>
                {/* tuan nay */}
                <div className="navmess__tab--notification--thisweek">
                  <p className='text-week'>Tuần này</p>
                  <div className="navmess__tab--notification--week">

                    <div className="notification__week--left">
                      <BsFlag  className='flag-icon'/>
                    </div>

                    <div className="notification__week--right">

                        <div className="notification__week--right--report">
                            <span>
                              <strong>Báo cáo:</strong>
                              <p>Xem trạng thái báo cáo của bạn.</p>  
                            </span>
                            <span className='navmess-time'>6 ngày trước</span>
                        </div>
                        <MdKeyboardArrowRight className='right-arrow-icon'/>
                    </div>
                  </div>
                </div>
              
              {/* like box */}
            <div className="navmess__tab__like">
              <p className='text-like'>Trước đây</p>
              {
                data.map(item=>{
                  return(
                    <div className="navmess__tab__like--nofi" key={item.id}>
                      <div className="navmess__tab__like--image">
                        <img src={item.avatar} alt="" />
                      </div>

                      <div className="navmess__tab__like--content">

                          <div className="navmess__tab__like--content-text">
                            <div className="navmess__tab__like--content--name">
                              <p>{item.names}</p>
                            </div>
                            <div className="navmess__tab__like--content--info">
                                <p className='content-like'>
                                    đã thích bình luận của bạn. 3-30
                                    <br></br>
                                    | thangbin1997: {item.title}
                                </p>
                            </div>
                          </div>

                          <div className="navmess__tab__like--postlike">
                              <img src={item.avatar} alt="" />
                          </div>
                      </div>
                    </div>
                )})
              }
            </div>

        </div>
    </div>
  )
}

export default NavMess