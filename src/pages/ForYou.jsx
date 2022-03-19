import React from 'react'
import { useState, useRef } from 'react';
import videoStyle from '../access/style/ForYou.scss'
import videos from '../components/dataVideos.jsx'
import { FaHashtag,FaCommentDots,FaShare,FaWhatsapp } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { AiOutlineHeart,AiTwotoneHeart,AiFillTwitterCircle } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsArrowUpRightSquare,BsFacebook,BsLink45Deg } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";


import ReactPlayer from 'react-player';

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
function ForYou() {
  const [playTime, setPlayTime] = useState(0);
  const [isLike,setIsLike]=useState(false);
  const [indexLike,setIndexLikee]=useState(0);
  const [indexShare,setIndexShare]=useState(0);
  const [checkFollow,setCheckFollow]=useState(false);

const handleLikeBtn=(index)=>{
    setIndexLikee(index)
    setIsLike(!isLike)
}
  const handleBtnFolow=(id)=>{
    videos.map(video=>{
      if(video.id === id){
        video.isFolow = !video.isFolow
        setCheckFollow(!checkFollow)
      }
    })
  }

const shareMenu= useRef()                                         //mouse hover share btn in videos
  const handleMouseOver=(id)=>{
    setIndexShare(id)
  }
  const handleMouseOut=()=>{
    setIndexShare()
  }

const formatTime = (time) => {
  const date = new Date(time * 1000);
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = ('0' + date.getUTCSeconds()).slice(-2);
  if (hour) {
    return `${hour}:${('0' + minute).slice(-2)}:${second}`;
  }
  return `${minute}:${second}`;
}

const handleProgress = (state) => {
  setPlayTime(formatTime(state.playedSeconds));
}

  return (
    <div>
        {
          videos.map((item,index)=>{
            return(
              <div className="video" key={item.id}>
                <div className="video__left">
                  <a href='#'>
                    <img src={item.avatar} alt={item.nickname} />
                  </a>
                </div>

                <div className="video__right">
                    <div className="video__right__head">
                      {/* name vs nick name */}
                      <div className="video__right-names">
                          <div className="video__right-name">
                            {item.names}
                          </div>
                          <div className="video__right-nickname">
                            {item.nickname}
                          </div>
                      </div>

                              {/* button follow vs following */}
                      <button 
                      className={`video__right-btn ${item.isFolow ? 'followed' : ''}`}
                      onClick={()=>handleBtnFolow(item.id)}>
                        {item.isFolow ? "Dang follow" : "Follow"}
                      </button>
                      

                            {/* Title and tag */}
                      <div className="video__right-title">
                          <span>{item.title}</span>
                          {(item.tag).map((tagName,index)=>{
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
                          <a href="#">{item.music}</a>
                      </div>
                    </div>
                            {/* videossssssssss */}
                    <div className="video__right__bottom">
                        <div className="video__right__bottom-video">
                        <ReactPlayer className="player"
                            url={item.video}
                            playing={false}
                            width="277px"
                            height="494px"
                            controls={true}
                            loop={true}
                            // volume=0.5;
                            onProgress={handleProgress}
                        />
                      </div>
                      <div className="video__right__bottom-icons">
                          <div className={`video__right__bottom-icon-like 
                          ${index === indexLike && isLike ? "liked" : ''}`} 
                              onClick={()=>handleLikeBtn(index)}
                          >
                              <div className='icon-box'>
                                  <AiTwotoneHeart className='video__right__bottom-icon'/>
                              </div>
                              <strong>{item.like}</strong>
                          </div>
                          <div className="video__right__bottom-icon-comment">
                              <div className='icon-box'>
                                  <FaCommentDots className='video__right__bottom-icon'/>
                              </div>
                              <strong>{item.comments}</strong>
                          </div>
                          <div className='video__right__bottom-icon-share'
                            onMouseOver={()=>handleMouseOver(item.id)}
                            onMouseOut={()=>handleMouseOut(item.id)}
                          >
                            <div className='icon-box'>
                                <FaShare className='video__right__bottom-icon'/>
                            </div>
                            <strong>{item.share}</strong>
                            <div className={`video__right__bottom-icon-share-menus
                          ${item.id === indexShare ? 'block' : 'none' }`}>
                                {
                                  menus.map(item=>{
                                    return(
                                      <a href="#" key={item.id}>
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
              </div>
            )
          })
        }
    </div>
  )
}

export default ForYou