import { useEffect,useState, useRef } from 'react'
import videoStyle from '../access/style/ForYou.scss'
import videos from '../components/dataVideos.jsx'
import Video from '../components/Video.jsx';


function ForYou(props) {

  return (
    <div className='forYou'>
        {videos.map(({ id, names, nickname, title, tag, music, like, comments, share, isFolow,avatar,video }) =>
          <Video key={id} id={id} nickname={nickname} names={names} title={title} tag={tag} 
          music={music} like={like} comments={comments} share={share} 
          isFolow={isFolow} avatar={avatar} video={video}/>)}
      
    </div>
  )
}

export default ForYou