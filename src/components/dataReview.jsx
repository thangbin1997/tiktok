import React, { useEffect,useState, useRef } from 'react'
import style from '../access/style/body.scss'

function DataReview({id, avatar, names, nickname, follower, like,checkElementHover,idMouseHover}) {
const [checkBtn, setCheckBtn]= useState(checkElementHover)
    const handleBtnFollow=()=>{
        setCheckBtn(!checkBtn)
    }
  return (
        <div className={`data__review ${checkElementHover && idMouseHover===id ?'active' :''}`} >
            <div className='data__review-avatar'>
                <img src={avatar} alt={names} />
                <button className={`data__review-btn ${!checkBtn ?'followed': ''}`}
                    onClick={()=>handleBtnFollow()}
                >
                    {` ${checkBtn ? 'Follow' : 'Đang Follow'}`}
                </button>
            </div>
            <p className="dataPropose__info-nickname text-bold">
                {nickname}
            </p>
            <p className="dataPropose__info-name">
                {names}
            </p>
            <div className="data__review-contact">
                <p className="data__review-contact-follower text-bold">{follower}</p>
                    <p className="data__review-contact-text">Follower</p>
                <p className="data__review-contact-like text-bold">{like}</p>
                    <p className="data__review-contact-text">Like</p>
            </div>
        </div>
  )
}

export default DataReview