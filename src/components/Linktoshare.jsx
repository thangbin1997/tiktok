import React from 'react'
import { FaHashtag,FaCommentDots,FaShare,FaWhatsapp,FaTelegram } from "react-icons/fa";
import { AiOutlineHeart,AiTwotoneHeart,AiFillTwitterCircle,AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRightSquare,BsFacebook,BsLink45Deg } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";
import linktoshareStyle from '../access/style/Linktoshare.scss'

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
    },{
        id:7,
        icon:<FaTelegram style={{color: "rgb(55, 174, 226)"}}/>,
        title:'Chia sẻ với Telegram'
    },{
        id:8,
        icon:<AiOutlineMail style={{color: "rgb(55, 174, 226)"}}/>,
        title:'Chia sẻ với Email'
    }
  ]
function Linktoshare() {
  return (
    <div className='share__box'>
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
  )
}

export default Linktoshare