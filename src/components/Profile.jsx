import {React,useEffect, useRef} from 'react'
import { FiLink } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { FiFlag } from 'react-icons/fi';
import { FaLock,FaRegPaperPlane } from 'react-icons/fa';
import profileStyle from '../access/style/profile.scss'
import Linktoshare from './Linktoshare.jsx'
import { useLocation } from 'react-router-dom';
import datasVideos from './dataVideos';

function Profile() {
    const profileId = useLocation();
    var profileById=datasVideos.find(getProfile=>getProfile.id == profileId.state.id)

    const ibrpBox= useRef()
    var timeOut;
    return(
        <div className='container__profile' key={profileById.id}>
            <div className="profile__info">
                <div className="profile__info__left">
                <div className="profile__info--head">
                    <div className="profile__info--head--avatar">
                        <img src={profileById.avatar} alt="avatar" />
                    </div>
                    <div className="profile__info--head--textinfo">
                        <div className="profile__info--head--textinfo--nickname">
                            <h1>{profileById.names}</h1>
                        </div>
                        <div className="profile__info--head--textinfo--name">
                            <h3>{profileById.nickname}</h3>
                        </div>
                        <div className="profile__info--head--textinfo--btn">
                            <button className='btn--bgred--textwhile'>Follow</button>
                        </div>
                    </div>
                </div>
                <div className="profile__info--body">
                    <div className="profile__info--body--count">
                        <div className="profile__info--body--count--follow">
                            <p><strong>{profileById.share}</strong></p>
                            <span>Đang Follow</span>
                        </div>
                        <div className="profile__info--body--count--follower">
                            <p><strong>{profileById.comments}</strong></p>
                            <span>Follower</span>
                        </div>
                        <div className="profile__info--body--count--like">
                            <p><strong>{profileById.like}</strong></p>
                            <span>Thích</span>
                        </div>
                    </div>
                    <div className="profile__info--body--desc">
                        <span>{profileById.title}</span>
                    </div>
                    <div className="profile__info--body--link">
                        <FiLink/> 
                        <span>biolink.com.vn/tiktoklive</span>
                    </div>
                </div>
                </div>
                <div className="profile__info__right">
                    <div className="profile__info__right--share" >
                        <RiShareForwardLine className='icon share__btn'/>
                        <Linktoshare className="profile__info__right--share--box"/>
                    </div>
                    <div className="profile__info__right--ibrp">
                        <BsThreeDots className='icon there__dot' 
                            onMouseEnter={()=>{ibrpBox.current.style.display="block"}}
                            onMouseLeave={()=>{timeOut=setTimeout(() => {
                                ibrpBox.current.style.display="none"
                            }, 300);}}
                        />
                        <div className="there__dot--box" ref={ibrpBox} onMouseEnter={()=>{ibrpBox.current.style.display="block";clearTimeout(timeOut)}}
                            onMouseLeave={()=>{timeOut=setTimeout(() => {
                                ibrpBox.current.style.display="none"
                            }, 300);}}
                            >
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