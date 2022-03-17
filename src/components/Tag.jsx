import React, { useEffect, useState } from 'react'
import {memo} from 'react'
import styleTag from '../access/style/tag.scss'
import { FiMusic } from "react-icons/fi";
import { FaHashtag } from "react-icons/fa";


function Tag({dataVideo}) {
    const newSetTag=new Set();
    const newSetMusic= new Set();
    const dataFilter=()=>{
        dataVideo.map(datasItem=>{
            (datasItem.tag).map(tagName=>{
                newSetTag.add(tagName)
            })
        })
    }
    const dataMusicFilter=()=>{
        dataVideo.map(datasItem=>{
            newSetMusic.add(datasItem.music)
        })
    }
    dataFilter()
    dataMusicFilter()
    const arrayMusic=[...newSetMusic]
    const arrayTag=[...newSetTag]
  return (
    <div className='tag__container'>
        <div className="tag__head">
            <p>Các tài khoản đang follow</p>
        </div>
        <div className="tag__data">
            {
                arrayTag.map(tagItem=>{
                    return(
                        <div className="tag__data-list"  key={tagItem}>
                            <a href="#">
                                <FaHashtag  className='tag__icon'/>
                                <p className='tag__text'>{tagItem}</p>
                            </a>
                        </div>
                    )
                })
            }
        </div>
        {/* Tag misic */}
        <div className="tag__data">
            {
                arrayMusic.map(tagItem=>{
                    return(
                        <div className="tag__data-list"  key={tagItem}>
                            <a href="#">
                                <FiMusic  className='tag__icon'/>
                                <p className='tag__text'>{tagItem}</p>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default memo(Tag)