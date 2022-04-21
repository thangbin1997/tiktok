import React, { useRef } from 'react'
import logo from '../access/image/TikTok_logo.svg'
import avatar from '../access/image/avatarDf.jpeg'
import headerStyle from '../access/style/header.scss'
import {BiCertification,BiLogOut, BiSearchAlt2,BiCloudUpload,BiPaperPlane,BiMessageAltMinus,BiCoinStack,BiUser,BiFontFamily } from "react-icons/bi";
import { AiOutlineQuestionCircle,AiOutlineTable } from "react-icons/ai";
import {Link} from 'react-router-dom'

const menus=[
  {
    id:1,
    icon:<BiUser/>,
    title:'Xem hồ sơ'
  },{
    id:2,
    icon:<BiCertification/>,
    title:'Cài đặt'
  },{
    id:3,
    icon:<BiFontFamily/>,
    title:'Tiếng Việt'
  },{
    id:4,
    icon:<AiOutlineQuestionCircle/>,
    title:'Phản hồi và trợ giúp'
  },{
    id:5,
    icon:<AiOutlineTable/>,
    title:'Phím tắt trên bàn phím'
  },{
    id:6,
    icon:<BiLogOut/>,
    title:'Đăng xuất'
  }
]
function  Header () {
const avatarHover= useRef()
  const handleMouseOver=()=>{
    avatarHover.current.style.display = 'block'
  }
  const handleMouseOut=()=>{
    avatarHover.current.style.display = 'none'

  }
  return (
    <div className='container'>
      <div className='header'>
        <div className="header__left" >      {/* style={{width: "1150px"}} */}
            <Link to="/tiktok">
              <img className='header__left-logo' src={logo} alt='logo'/>
            </Link>
        </div>
        <div className="header__middle">
            <div className="header__middle-container">
              <div className='header__middle-search'>
                <input  type='text'
                    placeholder='Tìm kiếm tài khoản và video'/>
              </div>
              <span></span>
              <div className='header__middle-search-button'>
                <BiSearchAlt2 className='header__middle-search-button-icon'/>
              </div>
            </div>
        </div>
        <div className="header__right">
            <ul>
              <li className='upload'>
                <a href="#"><BiCloudUpload className='header__right__icon'/></a>
              </li>
                <div className="upload__text header__hover">
                  <div className="icon__text aaa">Tải video lên</div>
                </div>

              <li className='mess'>
                <a href="#"><BiPaperPlane className='header__right__icon mess'/></a>
              </li>
              <div className="mess__text header__hover">
                  <div className="icon__text">Tin nhắn</div>
                </div>

              <li className='mail-box'>
                <a href="#"><BiMessageAltMinus className='header__right__icon boxMess'/></a>
                </li>
                <div className="mail-box__text header__hover">
                  <div className="icon__text">Hộp thư</div>
                </div>

              <li className='coin'>
                <a href="#"><BiCoinStack className='header__right__icon earnCoin'/></a>
                </li>
                <div className="coin__text header__hover">
                  <div className="icon__text">Nhận xu</div>
                </div>
            </ul>
            <div className="header__right__avatar"
               onMouseOver={()=>handleMouseOver()}
               onMouseOut={()=>handleMouseOut()}
            >
              <a href="#" className="header__right__avatars">
                <img src={avatar} alt="avartar"/>
              </a>
                <div className="header__right__avatar__menus" ref={avatarHover}>
                {
                  menus.map(menu=>{
                    return(
                      <div key={menu.id} className="header__right__avatar__menu">
                        <div className="header__right__avatar__menu-item">
                          <div className="header__right__avatar__menu-item-icon">
                            {menu.icon}
                          </div>
                          <div className="header__right__avatar__menu-item-info">
                            <p className="header__right__avatar__menu-item-info-text">
                              {menu.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header;
