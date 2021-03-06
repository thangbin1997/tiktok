import {React,useEffect,useRef,useState} from 'react'
import navmessStyle from '../access/style/navmess.scss'
import { GoPrimitiveDot } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TiAt } from 'react-icons/ti';
import { BsFlag,BsPeople } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import dataVideo from './dataVideos'

function NavMess() {
const like_test=10
const data= dataVideo.filter(item=>item.id <= like_test)

let like_box=useRef()
let comment_box=useRef()
let follow_box=useRef()
let mention_box= useRef()
let request_box=useRef()

useEffect(() => {
  const navTab=document.querySelectorAll('.nav-tab')
  comment_box.current.style.display='none'
  follow_box.current.style.display='none'
  mention_box.current.style.display='none'
  request_box.current.style.display='none'
  navTab.forEach(tab=>{ 
    tab.onclick=()=>{
      const tabActive=document.querySelector('.navmess__tab--active')
      tabActive.classList.remove('navmess__tab--active')
      tab.classList.add('navmess__tab--active')
    }
  })
}, [])

useEffect(() => {
  blockAllTab()
  request_box.current.style.display="block"
  like_box.current.style.display="block"
}, [])

const blockAllTab=()=>{
  like_box.current.style.display='none'
  comment_box.current.style.display='none'
  follow_box.current.style.display='none'
  mention_box.current.style.display='none'
  request_box.current.style.display='none'
}
const handleLikeClick=()=>{
  blockAllTab()
  like_box.current.style.display="block"
}
const handleAllClick=()=>{
  blockAllTab()
  request_box.current.style.display="block"
  like_box.current.style.display="block"
}
const handleCommentClick=()=>{
  blockAllTab()
  comment_box.current.style.display='block'
}
const handleMentionClick=()=>{
  blockAllTab()
  mention_box.current.style.display='block'
}
const handleFollowClick=()=>{
  blockAllTab()
  follow_box.current.style.display='block'
}


  return (
    <div className="navmess">
          <div className="mavmess__title">
              <h2>Th??ng b??o</h2>
          </div>
          <div className="navmess__tab">
              <span className='navmess__tab--all nav-tab 
              navmess__tab--active' onClick={handleAllClick}>T???t c???</span>

              <span className='navmess__tab--liked nav-tab' 
              onClick={handleLikeClick}>Th??ch</span>

              <span className='navmess__tab--comment nav-tab '
              onClick={handleCommentClick} >B??nh lu???n</span>

              <span className='navmess__tab--mention nav-tab'
              onClick={handleMentionClick}>Nh???c ?????n</span>

              <span className='navmess__tab--follower nav-tab'
              onClick={handleFollowClick}>Follower</span>
          </div>
        {/* navmess__tab--all */}
        <div className="navmess__tab--all--box">
                  {/* yeu cau follow */}
            <div ref={request_box}>
              <div className="navmess__tab--request--follow">
                <span>
                  Y??u c???u follow
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
                <div className="navmess__tab--notification--thisweek" >
                  <p className='text-week'>Tu???n n??y</p>
                  <div className="navmess__tab--notification--week">

                    <div className="notification__week--left">
                      <BsFlag  className='flag-icon'/>
                    </div>

                    <div className="notification__week--right">

                        <div className="notification__week--right--report">
                            <span>
                              <strong>B??o c??o:</strong>
                              <p>Xem tr???ng th??i b??o c??o c???a b???n.</p>  
                            </span>
                            <span className='navmess-time'>6 ng??y tr?????c</span>
                        </div>
                        <MdKeyboardArrowRight className='right-arrow-icon'/>
                    </div>
                  </div>
                </div>
              </div>
              {/* like box */}
            <div className="navmess__tab__like" ref={like_box}>
              <p className='text-like'>Tr?????c ????y</p>
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
                                    ???? th??ch b??nh lu???n c???a b???n. 3-30
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
              {/* comment box */}
              <div className="navmess__tab__comment" ref={comment_box}>
              <div className="navmess__tab__comment-icon">
                      <AiOutlineMessage className='comment-icon'/>
                  </div>
                  <div className="navmess__tab__comment-nothing">
                    <span>
                      <strong className='comment-text-bold'>B??nh lu???n tr??n video c???a b???n</strong>
                      <p className='comment-text'>Khi ai ???? b??nh lu???n v??? m???t trong c??c video c???a b???n, b???n s??? nh??n th???y ??? ????y</p>
                    </span>
                  </div>
              </div>

              {/* mention box */}
              <div className="navmess__tab__mention" ref={mention_box}>
                <div className="navmess__tab__mention-icon">
                    <TiAt className='mention-icon'/>
                </div>
                <div className="navmess__tab__mention-nothing">
                  <span>
                    <strong className='mention-text-bold'>Nh???c ?????n b???n</strong>
                    <p className='mention-text'>Khi ai ???? nh???c ?????n b???n, b???n s??? nh??n th???y ??? ????y</p>
                  </span>
                </div>
              </div>

              {/* comment box */}
              <div className="navmess__tab__follow" ref={follow_box}>
                <div className="navmess__tab__follow-icon">
                      <BsPeople className='follow-icon'/>
                  </div>
                  <div className="navmess__tab__follow-nothing">
                    <span>
                      <strong className='follow-text-bold'>Nh???ng Follower m???i</strong>
                      <p className='follow-text'>Khi c?? ng?????i m???i Follow b???n, b???n s??? nh??n th???y ??? ????y</p>
                    </span>
                  </div>
              </div>
        </div>
    </div>
  )
}
export default NavMess