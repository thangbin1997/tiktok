import {React,useRef,useEffect,useState} from 'react'
import videofullstyle from '../access/style/VideoFullscreenStyle.scss'
import { BsFillPlayFill,BsMusicNoteBeamed,BsFlag,BsVolumeUp } from 'react-icons/bs';
import { AiFillHeart,AiOutlineComment } from 'react-icons/ai';
import { TiAt } from 'react-icons/ti';
import { MdInsertEmoticon } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';

import {Linktoshare, menus} from './Linktoshare';




function VideoFullscreen(props) {
    const data = props.data                 //data
    const dataFunctionClose= props.close

    const [isPlay, setIsPlay] = useState(false)             //state
    const [currentTime, setCurrentTime] = useState('00:00')
    const [lengthOfVideo, setLengthOfVideo]= useState(0)
    const [checkFollow,setCheckFollow]=useState(data.isFolow);
    
    var body=document.querySelector('body')
    const video =useRef()                           //ref
    const isLeftSide=useRef()
    const playIcon=useRef()
    const process=useRef()
    const input_volume=useRef()
//disable scroll body
useEffect(() => {
    body.classList.add('stop-scrolling')
}, [])

//convert time
function convertMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let minutes = Math.floor(sec / 60); // get minutes
    let seconds = sec - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}
    
// click left side will play/pause
    const handleClickOnLeftSide=()=>{
        if(isPlay){
            playIcon.current.style.display="block"
            video.current.pause()
            setIsPlay(!isPlay)
        }
        else if (!isPlay) {
            playIcon.current.style.display="none"
            video.current.play()
            setIsPlay(!isPlay)
        }
    }
    //onTimeUpdate update every second
    const handleGetTime=()=>{
        var getCurrentTimes=convertMS(Math.floor(video.current.currentTime)); //current time
        setCurrentTime(getCurrentTimes)
        var progressPercent= ((video.current.currentTime / video.current.duration) * 100)
        process.current.value=progressPercent
        
    } 
    //duoc goi khi video bat dau chay
    const handleDuration=()=>{
        var lengthThisVideo=convertMS(video.current.duration) //length time video
        setLengthOfVideo(lengthThisVideo)
    }
    //close this fullscreen
    const handleCloseBtn=()=>{
        body.classList.remove('stop-scrolling')
        dataFunctionClose()

    }
    //btn follow
    const handleBtnFollow=(e)=>{
        let btn=e.target
        btn.classList.toggle('followed-fs')
        setCheckFollow(!checkFollow)
    }
    //get link to share
    const quantity_share = 5;
    const itemShare=menus.slice(0,quantity_share);
    //icon share hover
    const iconShareHover=(e)=>{
        console.log(e.target);
    }
    //volume value
    const handleVolumeChange=(e)=>{
        let rect = e.target.getBoundingClientRect();
        let y = e.clientY - rect.top;       //value of mouse in volume
        let value_colume_convert= (100 - y)
        input_volume.current.value=value_colume_convert
        video.current.volume=value_colume_convert/100
    }
    
  return ( 
    <div className='video__full'>
        {/* left side */}
        <div className="video__full__leftside" >
            <div className="video__full__leftside__backgound">
                <img src={data.avatar} 
                className="video__full__leftside__backgound--img"/>
            </div>
            <div className="video__full__leftside__video" ref={isLeftSide} 
        onClick={handleClickOnLeftSide}>
                <video className='video__full__leftside__video--video'
                    ref={video}  onTimeUpdate={handleGetTime} 
                    onDurationChange={handleDuration}
                    src={data.video} autoPlay loop playsInline />
            </div>
            <div className="video__full__leftside__timeline">
                <input className='video__full__leftside__timeline--progress' 
                type="range"  step="1" min="0" max="100" ref={process}/>
                <div className="video__full__leftside__timeline--time">
                    <span>
                        <p>{currentTime}/{lengthOfVideo}</p>
                    </span>
                </div>
            </div>
            <div className="video__full__leftside--playbtn" ref={playIcon}>
                <BsFillPlayFill  className='play-icon'/>
            </div>
            <div className="video__full__leftside__close--btn" onClick={handleCloseBtn}>
                <p className="close-icon">x</p>
            </div>
            <div className="video__full__leftside--report">
                <BsFlag className='flag-icon-fs' />
                <p>Báo cáo</p>
            </div>
    // volume btn
            <div className="video__full__leftside--volume">
                <div className="video__full__leftside--volume--value">
                        <input type="range" min="0" max="100"  step="1" 
                            onClick={(e)=>handleVolumeChange(e)} ref={input_volume}
                        />
                </div>
                <div className="video__full__leftside--volume--icon">
                    <BsVolumeUp className='volume-icon-fs'/>
                </div>
            </div>
        </div>

        {/* -------------right side------------------*/}
        <div className="video__full__rightside">
            <div className="video__full__rightside__info">
                <div className="video__full__rightside__info--header">
                    <div className="video__full__rightside__info--header--profile">
                        <div className="video__full__rightside__info--header--profile--avatar">
                            <img src={data.avatar} alt="" />
                        </div>
                        <div className="video__full__rightside__info--header--profile--names">
                            <span className='video__full__rightside__info--header--profile--name'>
                                {data.names}
                            </span>
                            <span className='video__full__rightside__info--header--profile--nickname'>
                                {data.nickname}
                            </span>

                        </div>
                    </div>
                    <div className="video__full__rightside__info--header--btn ">
                        <button  onClick={(e)=>handleBtnFollow(e)}>
                            {checkFollow ? "Đang follow" : "Follow"}
                        </button>
                    </div>
                </div>
                <div className="video__full__rightside__video--info">
                    <div className="video__full__rightside__video--info__title">
                        {data.title}{data.tag.map((tags,index)=>{
                            return(
                                <span key={index}>#{tags}</span>
                            )
                        })}
                    </div>
                    <div className="video__full__rightside__video--info__music">
                        <p><BsMusicNoteBeamed className='music-icon-fs'/>{data.music}</p>
                    </div>
                </div>
                <div className="video__full__rightside--body">
                    <div className="video__full__rightside--body--like-cmt">
                        <div className="video__full__rightside--body--like">
                            <AiFillHeart className='fullscreen-icon' />
                            <p>{data.like}</p>
                        </div>
                        <div className="video__full__rightside--body--cmt">
                            <AiOutlineComment className='fullscreen-icon' />
                            <p>{data.comments}</p>
                        </div>
                    </div>

                        <div className="video__full__rightside--body__share">
                            {
                                itemShare.map(item=>{
                                    return(
                                            <div className="share__item" key={item.id}>
                                                {item.icon}
                                                <div className="share__item--desc">
                                                    <span>{item.title}</span>
                                                </div>
                                            </div>
                                    )
                                })
                            }
                            <div className="video__full__rightside--body__share--btn">
                                <IoIosShareAlt classList="share-icon"/>
                            </div>
                        </div>
                </div>
                <div className="video__full__rightside--link">
                    <span>{`https://www.tiktok.com/@${data.names}`}</span>
                    <button>Sao chép liên kết</button>
                </div>
            </div>
            <div className="video__full__rightside__comment">
                Hiện chưa có bình luận nào

            </div>
            <div className="video__full__rightside__comment--add-cmt">
                <div className="comment__text__container">
                    <div className="comment__text__container--input">
                        <input className='input-cmt' type="text" placeholder='Thêm bình luận...'/>
                        <TiAt className='comment__input-icon'/>
                        <MdInsertEmoticon className='comment__input-icon'/>
                    </div>
                    <button className='comment__btn'>Đăng</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default VideoFullscreen