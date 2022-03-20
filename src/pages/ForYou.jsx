import { useEffect,useState, useRef } from 'react'
import videoStyle from '../access/style/ForYou.scss'
import videos from '../components/dataVideos.jsx'
import {useElementOnScreen} from '../App.jsx'
import { FaHashtag,FaCommentDots,FaShare,FaWhatsapp } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { AiOutlineHeart,AiTwotoneHeart,AiFillTwitterCircle } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsArrowUpRightSquare,BsFacebook,BsLink45Deg } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";
import Video from '../components/Video.jsx';


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
  
  // const [playing, setPlaying] = useState(false);

  // const videoRef = useRef(null);
  // const options = {
  //     root: null,
  //     rootMargin: '10px',
  //     threshold: 0.3
  // }
  
  // const isVisibile = useElementOnScreen(options, videoRef)
  // const onVideoClick = () => {
  //   if (playing) {
  //     videoRef.current.pause();
  //     setPlaying(!playing);
  //   } else {
  //     videoRef.current.play();
  //     setPlaying(!playing);
  //   }
  // };
  // useEffect(() => {
  //   if (isVisibile) {
  //     if (!playing) {        
  //       videoRef.current.play();
  //       setPlaying(true)
  //     }
  //   }
  //   else {
  //     if (playing) {        
  //       videoRef.current.pause();
  //       setPlaying(false)
  //     }
  //   }
  // }, [isVisibile])
// --------------------------------
  
// const handleLikeBtn=(index)=>{
//     setIndexLikee(index)
//     setIsLike(!isLike)
// }
//   const handleBtnFolow=(id)=>{
//     videos.map(video=>{
//       if(video.id === id){
//         video.isFolow = !video.isFolow
//         setCheckFollow(!checkFollow)
//       }
//     })
//   }

// const shareMenu= useRef()                                         //mouse hover share btn in videos
//   const handleMouseOver=(id)=>{
//     setIndexShare(id)
//   }
//   const handleMouseOut=()=>{
//     setIndexShare()
//   }

  return (
    <div className='forYou'>
        {videos.map(({ id, names, nickname, title, tag, music, like, comments, share, isFolow,avatar,video }) =>
          <Video key={id} nickname={nickname} names={names} title={title} tag={tag} 
          music={music} like={like} comments={comments} share={share} 
          isFolow={isFolow} avatar={avatar} video={video} />)}
      
    </div>
  )
}

export default ForYou