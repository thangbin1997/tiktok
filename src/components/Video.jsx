import React from 'react'
import { useEffect,useState, useRef } from 'react'
import useElementOnScreen from './useElementOnScreen.jsx'
import { FaHashtag,FaCommentDots,FaShare,FaWhatsapp } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { AiOutlineHeart,AiTwotoneHeart,AiFillTwitterCircle } from "react-icons/ai";
import { BsArrowUpRightSquare,BsFacebook,BsLink45Deg } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";
import videoStyle from '../access/style/ForYou.scss'
const menus=[
    {
      id:1,
      icon:<BsArrowUpRightSquare style={{color: "black",backgroundColor:"gray"}}/>,
      title:'Nhúng'
    },{
      id:2,
      icon:<BiPaperPlane style={{color: "red"}}/>,
      title:'Gửi đến bạn bè'
    },{
      id:3,
      icon:<AiFillTwitterCircle style={{color: "rgb(29, 161, 242)"}}/>,
      title:'Chia sẻ với Twitter'
    },{
      id:4,
      icon:<BsFacebook style={{color: "#141c9c"}}/>,
      title:'Chia sẻ với Facebook'
    },{
      id:5,
      icon:<FaWhatsapp style={{color: "rgb(37, 211, 102)"}}/>,
      title:'Chia sẻ với WhatsApp'
    },{
      id:6,
      icon:<BsLink45Deg style={{color: "rgb(254, 44, 85)"}}/>,
      title:'Sao chép liên kết'
    }
  ]
const Video = ({id, names, nickname, title, tag, music, like, comments, share, isFolow,avatar,video}) => {

const [playing, setPlaying] = useState(false);
const [isLikes,setIsLikes]=useState(false);
const [isShowShare,setIsShowShare]=useState(false);
const [checkFollow,setCheckFollow]=useState(isFolow);

// lazy load
const videoRef = useRef(null);
const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.8
}
const isVisibile = useElementOnScreen(options, videoRef)
const onVideoClick = () => {
if (playing) {
    videoRef.current.pause();
    setPlaying(!playing);
} else {
    videoRef.current.play();
    setPlaying(!playing);
}
};
useEffect(() => {
if (isVisibile) {
    if (!playing) {        
    videoRef.current.play();
    setPlaying(true)
    }
}
else {
    if (playing) {        
    videoRef.current.pause();
    setPlaying(false)
    }
}
}, [isVisibile])

//   ------------------------------------
const handleLikeBtn=(id)=>{
    setIsLikes(!isLikes)
}
const handleBtnFolow=()=>{
    setCheckFollow(!checkFollow)
}

//mouse hover share btn in videos
const handleMouseEnter=(id)=>{
    setIsShowShare(true)
}
const handleMouseLeave=()=>{
        setIsShowShare(false)
}

// hover avatar
const avatarReview = useRef()
const handleHoverAvatar=()=>{
  avatarReview.current.style.display= "block"
}
const handleLeaveAvatar=()=>{
      avatarReview.current.style.display= "none"
}

  return (
    <div>
              <div className="video" >
                <div className="video__left">
                  <a href='#' >
                    <img src={avatar} alt={nickname} 
                    onMouseEnter={handleHoverAvatar} 
                    onMouseLeave={handleLeaveAvatar}
                    />
                  </a>
                </div>

                <div className="video__right">
                    <div className="video__right__head">
                      {/* name vs nick name */}
                      <div className="video__right-names">
                          <div className="video__right-name"
                            onMouseEnter={handleHoverAvatar} 
                            onMouseLeave={handleLeaveAvatar}
                          >
                            {names}
                          </div>
                          <div className="video__right-nickname">
                            {nickname}
                          </div>
                      </div>

                              {/* button follow vs following */}
                      <button 
                      className={`video__right-btn ${checkFollow ? 'followed' : ''}`}
                      onClick={handleBtnFolow}>
                        {checkFollow ? "Đang follow" : "Follow"}
                      </button>
                      

                            {/* Title and tag */}
                      <div className="video__right-title">
                          <span>{title}</span>
                          {(tag).map((tagName,index)=>{
                            return(
                              <div className="video__right-title-tag" key={index}>
                                  <a href="#">
                                    <FaHashtag className='video__right-title-tag-icon'/>
                                    {tagName}
                                  </a>
                              </div>
                            )
                          })}
                      </div>
                              {/* Music Name */}
                      <div className="video__right-music">
                          <FiMusic className='video__right-music-icon'/>
                          <a href="#">{music}</a>
                      </div>
                    </div>
                            {/* videossssssssss */}
                    <div className="video__right__bottom" >
                        <div className="video__right__bottom-video">
                            <video width="100%" height="100%" loop src={video} 
                            controls ref={videoRef} onClick={onVideoClick}>
                        
                        </video>
                          
                        </div>
                      <div className="video__right__bottom-icons">
                          <div className={`video__right__bottom-icon-like 
                          ${isLikes ? "liked" : ''}`} 
                              onClick={handleLikeBtn}
                          >
                              <div className='icon-box'>
                                  <AiTwotoneHeart className='video__right__bottom-icon'/>
                              </div>
                              <strong>{like}</strong>
                          </div>
                          <div className="video__right__bottom-icon-comment">
                              <div className='icon-box'>
                                  <FaCommentDots className='video__right__bottom-icon'/>
                              </div>
                              <strong>{comments}</strong>
                          </div>
                          <div className='video__right__bottom-icon-share'
                            onMouseEnter={()=>handleMouseEnter()}
                            onMouseLeave={()=>handleMouseLeave()}
                          >
                            <div className='icon-box'>
                                <FaShare className='video__right__bottom-icon'/>
                            </div>
                            <strong>{share}</strong>
                            <div className={`video__right__bottom-icon-share-menus
                            ${isShowShare ? 'block' : 'none' }`}>
                                {
                                  menus.map((item,index)=>{
                                    return(
                                      <a href="#" key={index}>
                                        {item.icon}
                                        {item.title}
                                      </a>
                                    )
                                  })
                                }
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                                {/* avatar review */}
                <div className="video__data__review" ref={avatarReview} 
                    onMouseEnter={handleHoverAvatar} 
                    onMouseLeave={handleLeaveAvatar}
                >
                      <div className="video__data__review-space"></div>
                      <div className="video__data__review-container">
                                <div className="video__data__review-header">
                                    <a href='#' className='video__data__review-header-avatar'>
                                      <img src={avatar} alt={nickname} />
                                    </a>
                                    <button className='video__data__review-header-btn' onClick={handleBtnFolow}>
                                        {checkFollow ? "Đang follow" : "Follow"}
                                    </button>
                                </div>
                                <div className="video__data__review-body">
                                      <a href="" className="video__data__review-body-names">
                                        {names}
                                      </a>
                                      <span className="video__data__review-body-nickname">
                                        {nickname}
                                      </span>
                                      <div className="video__data__review-body-social">
                                          <span className="video__data__review-body-follow">
                                              {comments}
                                          </span>
                                          <p>Follower</p>
                                          <span className="video__data__review-body-like">
                                              {like}
                                          </span>
                                          <p>Like</p>

                                      </div>
                                </div>
                                <div className="video__data__review-footer">
                                    <span className='video__data__review-footer-text'>
                                        Chưa có tiểu sử.
                                    </span>
                                </div>
                      </div>
                </div>
              </div>
    </div>
  )
}

export default Video

