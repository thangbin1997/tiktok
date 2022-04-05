import React from 'react'
import Video from '../components/Video'
import videos from '../components/dataVideos'
function Folowing() {
  return (
    <div className='following'>
        {videos.map(({ id, names, nickname, title, tag, music, like, comments, share, isFolow,avatar,video }) =>
          <Video key={id} nickname={nickname} names={names} title={title} tag={tag} 
          music={music} like={like} comments={comments} share={share} 
          isFolow={isFolow} avatar={avatar} video={video} />)}
      
    </div>
  )
}

export default Folowing