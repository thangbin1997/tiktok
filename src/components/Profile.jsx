import React from 'react'
import { FiLink } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { FiFlag } from 'react-icons/fi';
import { FaLock,FaRegPaperPlane } from 'react-icons/fa';
import profile from '../access/style/profile.scss'
import Linktoshare from './Linktoshare.jsx'


function Profile() {
  return (
    <div className='container__profile'>
        <div className="profile__info">
            <div className="profile__info--head">
                <div className="profile__info--head--avatar">
                    <img src="avatar" alt="avatar" />
                </div>
                <div className="profile__info--head--textinfo">
                    <div className="profile__info--head--textinfo--nickname">
                        <h1>nickname</h1>
                    </div>
                    <div className="profile__info--head--textinfo--name">
                        <h3>name</h3>
                    </div>
                    <div className="profile__info--head--textinfo--btn">
                        <button className='btn--bgred--textwhile'>Follow</button>
                    </div>
                </div>
            </div>
            <div className="profile__info--body">
                <div className="profile__info--body--count">
                    <div className="profile__info--body--count--follow">
                        <p>0</p>
                        <span>Đang Follow</span>
                    </div>
                    <div className="profile__info--body--count--follower">
                        <p>62.8k</p>
                        <span>Follower</span>
                    </div>
                    <div className="profile__info--body--count--like">
                        <p>433k</p>
                        <span>Thích</span>
                    </div>
                </div>
                <div className="profile__info--body--desc">
                    <span>Bấm vào đây để thấy điều thú vị nha</span>
                </div>
                <div className="profile__info--body--link">
                    <FiLink/> 
                    <span>biolink.com.vn/tiktoklive</span>
                </div>
            </div>
        </div>
        <div className="profile__info__right">
            <div className="profile__info__right--share">
                <RiShareForwardLine className='icon share__btn'/>
                <Linktoshare/>
            </div>
            <div className="profile__info__right--ibrp">
                <BsThreeDots className='icon there__dot'/>
                <div className="there__dot--box">
                    <div className="there__dot--box--ib">
                        <FaRegPaperPlane className="there__dot--icon"/>
                        <span>Gửi tin nhắn</span>
                    </div>
                    <div className="there__dot--box--report">
                        <FiFlag className="there__dot--icon"/>
                        <span>Báo cáo</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="profile__bar__body">
            <div className="profile__bar__body--btn">
                <div className='profile__bar__body--btn--video'>
                    <span>Video</span>
                </div>
            </div>
            <div className="profile__bar__body--btn">
                <div className='profile__bar__body--btn--liked'>
                    <FaLock className='profile__bar__body--icon'/>
                    <span>Đã thích</span>
                </div>
            </div>
        </div>

        <div className="profile__list__video">
            <div className="profile__list__video--videos">
                video
            </div>
            <div className="profile__list__video--title">
                <span>mieu ta ngan cua video...</span>
            </div>
        </div>
    </div>
  )
}

export default Profile