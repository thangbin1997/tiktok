import React from 'react'
import messageStyle from '../access/style/message.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';


function Message() {
  return (
    <div className='message__container'>
      <div className="message__content">
        <div className="message__content__back-container">
          <AiOutlineArrowLeft  className='arrow-left-icon'/>
        </div>
        <div className="message__content__left">
          <div className="message__content__left-header">
            <h2>Tin nhắn</h2>
            <BsFillGearFill  className='wheel-icon'/>
          </div>
          <div className="message__content__left-content">
            <div className="message__content__left-content-item">
              <span>Chưa có tín nhắn nào</span>
            </div>
          </div>
        </div>
        <div className="message__content__right">

        </div>
      </div>
    </div>
  )
}

export default Message